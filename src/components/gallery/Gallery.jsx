import "./gallery.scss";
import React from 'react';
import { UseFirestore } from '../../hooks/UseFirestore';

export default function Gallery({ setSelectedImg }) {
  const { images } = UseFirestore();

  return (
    <div className="gallery">
      <div className="img-grid"> 
          { images && images.map((images) => ( //Pulling images from UseFirestore - images
              <div className="img-wrap" key={images.id} onClick={() => setSelectedImg(images.url)}>
                  <img src={images.url} alt="pic" />
              </div>
          )) }
      </div>
    </div>
  )
}
