import React, { Component } from 'react'
import { getCategoryPage } from '../utils/api'
import { parse } from 'query-string'
import Character from './Character'
import { reverseAcronym } from '../utils/helper'

const LocationInfo = ({ name, dimension, type })=> (
  <div className='episode-info container'>
    <h1 style={{color: '#333'}} className='episode-header'>{name}</h1>
    <ul className='center'>
      <li>
        <h4>Dimension <div>{dimension}</div></h4>
      </li>
      <li>
        <h4>Type <div>{type}</div></h4>
      </li>
    </ul>
    <h2 style={{marginTop: '3em'}} className='episode-header'>Location Residents <span style={{fontSize: '16px'}}>(some of them)</span></h2>
  </div>
)

const LocationResidents = ({ residents })=> (
  <div className='characters-container'>
    {residents.map(character => (
      <Character key={character.id} data={character} />
    ))}
  </div>
)

export default class Location extends Component {
  state = {
    location: {},
    locationResidents: [],
    loading: false,
  }

  async componentDidMount() {
    this.setState(()=>({loading: true}));

    const results = await getCategoryPage('location/', parse(this.props.location.search).id);

    const characterString = results.residents.map(string => {
      return  string.split('/').slice(5).join('');
    })

    const residents = await getCategoryPage('character/', characterString);

    this.setState(()=>({location: results, locationResidents: residents, loading: false,}));
    console.log(this.state)
  }

  render() {
    const { location, locationResidents } = this.state;
    const { name, type, dimension } = location;
    return this.state.loading === true
      ? <div>loading</div>
      : <div>
          <LocationInfo
            name={name}
            type={type}
            dimension={dimension}/>
          <LocationResidents residents={locationResidents} />
        </div>
  }
}
