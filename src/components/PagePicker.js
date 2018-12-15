import React from 'react';
import { Link } from 'react-router-dom';

export default function PagePicker(props) {
  const { numPages, currentPage, category } = props;
  let nextPage = parseInt(currentPage) + 1;
  if ( nextPage > numPages ) {
    nextPage = 1;
  }

  return (
    <div className='page-picker'>
    <Link
      className='button'
      to={{
        pathname: `/${category}`,
        search: `?page=${currentPage - 1}`
      }}>
    Prev
    </Link>
    <p style={{fontWeight: '300'}}>Page: {currentPage}</p>
    <Link
      className='button'
      to={{
        pathname: `/${category}`,
        search: `?page=${nextPage}`
      }}>
    Next
    </Link>
    </div>
  )
}
