import React from 'react';
import '../../CSS/mediaGallery.css'
import MediaGalleryComponent from './MediaGalleryComponent';

const MediaGallery = () => {
  return (
    <div className='mediaGallery'>
      <MediaGalleryComponent mediaImg="https://ishwarishinde.github.io/cdn/mediaG1.png"  />
      <MediaGalleryComponent mediaImg="https://ishwarishinde.github.io/cdn/mediaG2.png"  />
      <MediaGalleryComponent mediaImg="https://ishwarishinde.github.io/cdn/mediaG5.png"  />
      <MediaGalleryComponent mediaImg="https://ishwarishinde.github.io/cdn/mediaG4.png"  />
      <MediaGalleryComponent mediaImg="https://ishwarishinde.github.io/cdn/mediaG3.png"  />
    </div>
  )
}

export default MediaGallery