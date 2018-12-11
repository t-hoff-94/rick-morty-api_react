import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PagePicker extends Component {
  render() {
    const { currentPage, category } = this.props;
    const nextPage = parseInt(currentPage) + 1;
    return (
      <div className='page-picker'>
      <Link
        className='button'
        onClick={this.props.updatePage}
        to={{
          pathname: `/${category}`,
          search: `?page=${currentPage - 1}`
        }}>
      Prev
      </Link>
      <p>page: {currentPage}</p>
      <Link
        className='button'
        onClick={this.props.updatePage}
        to={{
          pathname: `/${category}`,
          search: `?page=${nextPage}`
        }}>
      Next
      </Link>
      </div>
    )
  }
}

export default PagePicker;
