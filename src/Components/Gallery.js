import React, { useState, useCallback } from "react";
import './Gallery.css'
// import Gallery from "react-photo-gallery";
import PhotoAlbum from "react-photo-album";
import photos from '../photos'
import Carousel, { Modal, ModalGateway } from "react-images";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const slides = photos.map(({ src, width, height, images }) => ({
  src,
  width,
  height,
  srcSet: images.map((image) => ({
      src: image.src,
      width: image.width,
      height: image.height,
  })),
}));


const Gallery = () => {

  const [index, setIndex] = useState(-1);

    return (
      <div className='gallery' id='gallery'>
      <div className='album-container'>
      <h2>Gallery</h2>
      <span className='line'></span>
            <PhotoAlbum
                photos={photos}
                layout="rows"
                targetRowHeight={300}
                padding={10}
                onClick={(event, photo, index) => setIndex(index)}
            />

            <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
            </div>
            </div>
        
    );
  // const [currentImage, setCurrentImage] = useState(0);
  // const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // const openLightbox = useCallback((event, { photo, index }) => {
  //   setCurrentImage(index);
  //   setViewerIsOpen(true);
  // }, []);

  // const closeLightbox = () => {
  //   setCurrentImage(0);
  //   setViewerIsOpen(false);
  // };

  //   return(
        // <div className='gallery' id='gallery'>
        //     <div className='album-container'>
        //     <h2>Gallery</h2>
        //     <span className='line'></span>
  //         <div className='photo-container'>
  //         <PhotoAlbum layout="rows" photos={photos} spacing={6} targetRowHeight={275} onClick={openLightbox} />
  //       <ModalGateway>
  //       {viewerIsOpen ? (
  //         <Modal onClose={closeLightbox}>
  //           <Carousel
  //             currentIndex={currentImage}
  //             views={photos.map(x => ({
  //               ...x,
  //               srcset: x.srcSet,
  //               caption: x.title
  //             }))}
  //           />
  //         </Modal>
  //       ) : null}
  //     </ModalGateway>



  //         </div>
        
  //       </div>
  //       </div>
  //   )
}

export default Gallery