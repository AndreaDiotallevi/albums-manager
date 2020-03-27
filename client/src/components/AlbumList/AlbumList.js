import React from 'react';
import { Link } from 'react-router-dom';
import AlbumInput from '../AlbumInput/AlbumInput'

const AlbumList = (props) => {
  return (
    <div>
      <h1 data-test='albums-page-title'>YOUR ALBUMS</h1>
      <AlbumInput updateAlbums={props.updateAlbums}/>
      <ul>
      {props.albums.map(album => (
        <li key={album._id} className='album'>
          <Link to={`/albums/${album._id}`} className='album-link'>
            <h2 data-test='album-title'>{album.title}</h2>
            <h3 data-test='album-artist'>{album.artist}</h3>
          </Link>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default AlbumList;
