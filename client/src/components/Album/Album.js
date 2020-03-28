import React from 'react';
import LoanInput from '../LoanInput/LoanInput'
import ReturnInput from '../ReturnInput/ReturnInput'

const Album = (props) => {
  const album = props.albums.filter(album => album._id === props.match.params.id)[0];

  return (
    <div id='album-component'>
      <div id='album-component-header'>
        <h2 className='album-page-title' data-test='album-page-title'>{album.title}</h2>
        <p className='text-separator'> | </p>
        <h3 className='album-page-artist' data-test='album-page-artist'>{album.artist}</h3>
      </div>
      {album.loanedTo === null && <LoanInput album={album} updateAlbum={props.updateAlbum}/>}
      {album.loanedTo !== null && <ReturnInput album={album} updateAlbum={props.updateAlbum}/>}
      <div id='album-container'>
        <img className='album-page-poster' data-test='album-page-poster' src={`${album.posterURL}`} alt={`${album.title}-poster`}></img>
        <ul id='track-list'>
          <h4 className='tracks-header'>Tracks</h4>
          {album.tracks.map((track, index) => (
            <li key={`${index}`} className='track'>
              <p data-test='album-page-track-name'>{track}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Album;
