import React from 'react'
import './Album.css'
// import Gallery from "react-photo-gallery";
import PhotoAlbum from "react-photo-album";
import photos from '../photos'


const Album = () => {
    return(
        <div className='album'>
            <div className='album-container'>
            <h2>Gallery</h2>
            <span className='line'></span>
        <PhotoAlbum layout="rows" photos={photos} spacing={6} targetRowHeight={300} defaultContainerWidth />
        </div>
        </div>
    )
}

export default Album