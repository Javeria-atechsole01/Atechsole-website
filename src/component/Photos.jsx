import React from 'react';
import './Gallery.css';
import Footer from './Footer';


import img1 from '../assets/Event-images/image (1).jpeg';
import img2 from '../assets/Event-images/image (2).jpeg';
import img3 from '../assets/Event-images/image (3).jpeg';
import img4 from '../assets/Event-images/image (4).jpeg';
import img5 from '../assets/Event-images/image (5).jpeg';
import img6 from '../assets/Event-images/image (6).jpeg';
import img7 from '../assets/Event-images/image (7).jpeg';
import img8 from '../assets/Event-images/image (13).jpeg';
import img9 from '../assets/Event-images/image (9).jpeg';
import img10 from '../assets/Event-images/image (10).jpeg';
import img11 from '../assets/Event-images/image (11).jpeg';
import img12 from '../assets/Event-images/image (12).jpeg';

const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const Photos = () => {
  return (
    <>
      <div className="gallery-container">
        <div className="gallery-header">
          <h1>Photo Gallery</h1>
          <p>Capturing moments and memories</p>
        </div>
        <div className="gallery-grid">
          {photos.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt={`Gallery ${index + 1}`} loading="lazy" />
              <div className="gallery-overlay">
                <span>View Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Photos;
