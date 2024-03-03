import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 5000);
    });

    // throw new Error('Loading meals failed');
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
    // * slugify를 이용한 slug 생성
    meal.slug = slugify(meal.title, { lower: true });
    // * xss 패키지를 이용한 xss 공격 검열
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    // * node에서 기본적으로 제공해주는 파일시스템(fs)의 createWriteStream을 이용해 이미지를 업로드
    const stream = fs.createWriteStream(`public/images/${fileName}`);
    // * formData의 image를 arrayBuffer()를 이용하여 바이너리 데이터로 변환
    const bufferedImage = await meal.image.arrayBuffer();

    // * 위에서 생성한 stream에 실제 이미지 파일을 전달해야함
    // * 하지만 이미지 자체를 그냥 전달하면 데이터 호환이 안되므로 위에서 변환한 바이너리 데이터를 Buffer.from()에 넣어 Node.js에서 사용가능한 Buffer 객체로 변환
    // * 마치 서로 다른 개발언어에서 데이터를 쉽게 전달 받기위해 JSON형식으로 변환하는 것과 같은 이유
    // * 변환된 Node.js Buffer 객체를 stream.write()에 첫번째 파라미터로 전달
    // * 두번째 파라미터 자리는 callback으로써 error가 발생하면 error에 대한 정보를 반환
    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Saving image failed!');
        }
    });

    // * stream.write()를 통해 이미지가 error없이 업로드되었다면, 데이터베이스에는 이미지 자체가 아닌 이미지 경로를 저장해야 합니다.
    // * 이를 위해 stream에 사용된 파일경로를 이용해 meal.image를 덮어씌워줍니다.
    // * 파일경로의 public부분은 지우고 덮어씌웁니다. 이는 모든 이미지에 관한 요청은 자동적으로 public폴더로 보내지기 때문입니다.
    meal.image = `/images/${fileName}`;

    db.prepare(
        `
    INSERT INTO meals 
    (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
    )
    `
    ).run(meal);
}
