import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  const pathname = props.location.pathname;

  const renderPageTitle = () => {
    if (pathname === '/albums' || pathname.includes('?loanedTo')) {
      return (
        <div className='navbar-center'>
          <h1 className='albums-page-title' data-test='albums-page-title'>YOUR ALBUM MANAGER</h1>
        </div>
      )
    } else {
      const albumId = pathname.split('/').slice(-1)[0];
      const album = props.albums.filter(album => album._id === albumId)[0];
      return (
        <div className='navbar-center'>
          <h2 className='album-page-title' data-test='album-page-title'>{album.title}</h2>
          <p className='text-separator'> | </p>
          <h3 className='album-page-artist' data-test='album-page-artist'>{album.artist}</h3>
        </div>
      )
    }
  }

  return (
    <div id='navbar-component'>
      <div id='navbar-container'>
        {renderPageTitle()}
        <div className='navbar-right'>
          <Link to='/albums' className='navbar-link'>ALBUMS
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
