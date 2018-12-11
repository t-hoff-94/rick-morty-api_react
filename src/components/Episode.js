import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getCategoryPage } from '../utils/api'
import { parse } from 'query-string'
import Character from './Character'


const EpisodeInfo = ({ name, episode, airDate })=> (
  <div className='episode-info container'>
    <h1 className='episode-header'>{name}</h1>
    <h2 className='episode-header'>Episode Characters <span style={{fontSize: '16px'}}>(some of them)</span></h2>
  </div>
)

const EpisodeCharacters = ({ characters })=> (
  <div className='characters-container'>
    {characters.map(character => (
      <Character key={character.id} data={character} />
    ))}
  </div>
)

class Episode extends Component {
  state = {
    episodeCharacters: [],
    episode: {},
    loading: true,
  }

  async componentDidMount() {
    this.setState(()=>({loading: true}));

    const results = await getCategoryPage('episode/', parse(this.props.location.search).id);

    const rez = results.characters.map(string => {
      return  string.split('/').slice(5).join('');
    })

    const chaz = await getCategoryPage('character/', rez);
    console.log(chaz)

    this.setState(()=>({episode: results, episodeCharacters: chaz, loading: false,}));
  }

  render() {
    const { air_date, characters, episode, name } = this.state.episode;

    return this.state.loading === true
      ? <div>loading</div>
      : <div>
          <EpisodeInfo
            name={name}
            episode={episode}
            airDate={air_date} />
          <EpisodeCharacters
            characters={this.state.episodeCharacters} />
        </div>
  }
}

export default Episode;
