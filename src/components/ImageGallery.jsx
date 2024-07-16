import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ items }) => {
  return (
    <ul className={css.ImageGallery}>
      {items.map(item => (
        <ImageGalleryItem key={item.id} src={item.src} alt={item.alt} />
      ))}
    </ul>
  );
};

export default ImageGallery;
