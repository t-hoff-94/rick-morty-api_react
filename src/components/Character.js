import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Character extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  state = {
    active: this.props.special,
  }

  handleClick = (e) => {
    e.preventDefault();
    this.state.active 
    ? this.setState(()=>({active: false}))
    : this.setState(()=>({active: true}))

  }

  render() {
    const { data } = this.props;
    return (
      <div className='fig-ctr'>
        <figure className='character'>
          <div className={this.state.active ? 'character--active' : 'character--hidden'}>
            <h2>{data.name}</h2>
            <table className="character__info">
              <tbody>
                <tr>
                  <th>Species</th><td>{data.species}</td>
                </tr>
                <tr>
                  <th>Status</th><td>{data.status}</td>
                </tr>
                <tr>
                  <th>Origin</th><td>{data.origin.name}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <img className='character-avatar' src={data.image} alt={data.name}></img>
        </figure>
        <div className='details'>
          <button className='dtl-btn' onClick={this.handleClick}>{this.state.active ? 'close' : 'details'}</button>
        </div>
      </div>
    )
  }
}

export default Character;
