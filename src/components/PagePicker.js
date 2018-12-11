import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function PagePicker(props) {
  const { currentPage, category } = props;
  const nextPage = parseInt(currentPage) + 1;
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
    <p>page: {currentPage}</p>
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
