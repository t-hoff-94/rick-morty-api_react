import React, { Component } from 'react';

class Episodes extends Component {
  state = {
    characters: null,
    loading: true,
  }


  render() {

    return this.state.loading === true
      ? <div>loading</div>
      : <div className='locations-ctr'>
            locations
        </div>
  }
}

export default Episodes;
