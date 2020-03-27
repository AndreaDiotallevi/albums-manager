import React from 'react';
import { Link } from 'react-router-dom';
import AlbumInput from '../AlbumInput/AlbumInput'

const AlbumList = (props) => {
  return (
    <div id='album-list-component'>
      <h1 className='albums-page-title' data-test='albums-page-title'>YOUR ALBUMS</h1>
      <AlbumInput updateAlbums={props.updateAlbums}/>
      <ul id='album-list-container'>
      {props.albums.map(album => (
        <li key={`${album._id}`} className='album'>
          <Link to={`/albums/${album._id}`} className='album-link'>
            <img data-test='album-poster' className='album-poster' src={`${album.posterURL}`} alt={`${album.title}-poster`}></img>
            <div className='album-info'>
              <p className='album-title' data-test='album-title'>{album.title}</p>
              <p className='test'> | </p>
              <p className='album-artist' data-test='album-artist'>{album.artist}</p>
            </div>
          </Link>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default AlbumList;
