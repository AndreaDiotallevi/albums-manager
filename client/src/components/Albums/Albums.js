import React from 'react';

function Albums(props) {
  return (
    <div>
      <h1 data-test='albums-page-title'>YOUR ALBUMS</h1>
      <ul>
      {props.albums.map((album, index) => (
        <li key={index} className='album'>
          <h2 data-test='album-title'>{album.title}</h2>
          <h3 data-test='album-artist'>{album.artist}</h3>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Albums;
