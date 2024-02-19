export default function BlogPost({ params }) {
    return (
        <main>
            <h1>Blog Bost</h1>
            <p>{params.id}</p>
        </main>
    );
}
