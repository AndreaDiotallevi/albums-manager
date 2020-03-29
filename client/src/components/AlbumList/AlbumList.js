import React from 'react';
import { Link } from 'react-router-dom';
import AlbumInput from '../AlbumInput/AlbumInput'
import LoanFilter from '../LoanFilter/LoanFilter'
import queryString from 'query-string'

const AlbumList = (props) => {
  const values = queryString.parse(props.location.search);

  const filterAlbums = () => {
    if (values.loanedTo === undefined) {
      return props.albums.slice().reverse();
    } else {
      return props.albums.slice().reverse().filter(album => album.loanedTo === values.loanedTo);
    }
  }

  return (
    <div id='album-list-component'>
      {/* <div className='header-container'>
        <h1 className='albums-page-title' data-test='albums-page-title'>YOUR ALBUM MANAGER</h1>
      </div> */}
      <AlbumInput updateAlbums={props.updateAlbums}/>
      <LoanFilter history={props.history}/>
      <ul id='album-list-container'>
      {filterAlbums().map(album => (
        <li key={`${album._id}`} className='album'>
          <Link to={`/albums/${album._id}`} className='album-link'>
            <img data-test='album-poster' className='album-poster' src={`${album.posterURL}`} alt={`${album.title}-poster`}></img>
            <div className='album-info'>
              <p className='album-title' data-test='album-title'>{album.title}</p>
              <p> | </p>
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
