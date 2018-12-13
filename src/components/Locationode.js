import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getCategoryPage } from '../utils/api'
import { parse } from 'query-string'
import Character from './Character'
import { reverseAcronym } from '../utils/helper'

class Locationode extends Component {
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
    console.log(results)
  }

  render() {
    return this.state.loading === true
      ? <div>loading</div>
      : <div>
          {JSON.stringify(this.state)}
        </div>
  }
}

export default Locationode;
