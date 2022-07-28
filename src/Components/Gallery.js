import React, { useState, useCallback } from "react";
import './Gallery.css'
// import Gallery from "react-photo-gallery";
import PhotoAlbum from "react-photo-album";
import photos from '../photos'
import Carousel, { Modal, ModalGateway } from "react-images";

const Gallery = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

    return(
        <div className='gallery' id='gallery'>
            <div className='album-container'>
            <h2>Gallery</h2>
            <span className='line'></span>
          <div className='photo-container'>
          <PhotoAlbum layout="rows" photos={photos} spacing={6} targetRowHeight={275} onClick={openLightbox} />
        <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>



          </div>
        
        </div>
        </div>
    )
}

export default Gallery