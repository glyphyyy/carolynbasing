import "./galleryModal.scss";
import React from 'react'

export default function GalleryModal({ selectedImg, setSelectedImg }) {

    const handleClick = (e) => {
        setSelectedImg(null);
    }

    return (
        <div className='gallery-modal' onClick={handleClick}>
            <img src={selectedImg} alt="expanded" />
        </div>
    )
}
