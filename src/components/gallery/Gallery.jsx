import "./gallery.scss";
import React from 'react';
import { UseFirestore } from '../../hooks/UseFirestore';

export default function Gallery() {
    const { images } = UseFirestore();

  return (
    <div className="gallery">
      <div className="img-grid"> 
          { images && images.map((images) => (
              <div className="img-wrap" key={images.id}>
                  <img src={images.url} alt="pic" />
              </div>
          )) }
      </div>
    </div>
  )
}
