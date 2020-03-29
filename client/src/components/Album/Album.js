import React from 'react';
import { Link } from 'react-router-dom';

import LoanInput from '../LoanInput/LoanInput'
import ReturnInput from '../ReturnInput/ReturnInput'

const Album = (props) => {
  const album = props.albums.filter(album => album._id === props.match.params.id)[0];
  // const albumId = props.location.pathname.split('/').slice(-1)[0];
  // const album = props.albums.filter(album => album._id === albumId);
  // console.log(props)
  // console.log(albumId)
  console.log(props);
  console.log(album);


  return (
    <div id='album-component'>
      <div className='header-container'>
        <div className='navbar'>
          <div className='navbar-left'>
            <h2 className='album-page-title' data-test='album-page-title'>{album.title}</h2>
            <p className='text-separator'> | </p>
            <h3 className='album-page-artist' data-test='album-page-artist'>{album.artist}</h3>
          </div>
          <div className='navbar-right'>
            <Link to='/albums' className='navbar-link'>ALBUMS</Link>
          </div>
        </div>
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
