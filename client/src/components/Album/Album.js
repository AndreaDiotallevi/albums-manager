import React from 'react';

const Album = (props) => {
  const album = props.albums.filter(album => album._id === props.match.params.id)[0];

  return (
    <div>
      <h2 data-test='album-page-title'>{album.title}</h2>
      <h3 data-test='album-page-artist'>{album.artist}</h3>
      <img data-test='album-page-poster-url' src={`${album.posterURL}`} alt={`${album.title}-poster`}></img>
      <ul>
        {album.tracks.map((track, index) => (
          <li key={`${index}`}>
            <p data-test='album-page-track-name'>{track}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Album;
