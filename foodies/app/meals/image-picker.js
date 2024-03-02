'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import styled from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState();
    const imageInput = useRef();
    function handlePickClick() {
        imageInput.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    }

    return (
        <div className={styled.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={styled.controls}>
                <div className={styled.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && <Image src={pickedImage} alt="The image selected by the user." fill></Image>}
                </div>
                <input className={styled.input} type="file" id={name} accept="image/png, image/jpeg" name={name} ref={imageInput} onChange={handleImageChange} required />
                <button className={styled.button} type="button" onClick={handlePickClick}>
                    Pick an Image
                </button>
            </div>
        </div>
    );
}
