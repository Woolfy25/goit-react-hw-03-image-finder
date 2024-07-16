import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li className={css.galleryItem}>
      <img src={src} alt={alt} className={css.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
