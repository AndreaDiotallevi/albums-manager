import React from 'react';
import { Link } from 'react-router-dom';

function Albums(props) {
  return (
    <div>
      <h1 data-test='albums-page-title'>YOUR ALBUMS</h1>
      <ul>
      {props.albums.map((album, index) => (
        <li key={index} className='album'>
          <Link to={`/albums/${album.artist}/${album.title}`} className='album-link'>
            <h2 data-test='album-title'>{album.title}</h2>
            <h3 data-test='album-artist'>{album.artist}</h3>
          </Link>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Albums;
