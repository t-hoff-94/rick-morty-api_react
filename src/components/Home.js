import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Character from './Character'
import { getCharacters } from '../utils/api'

class Home extends Component {
  state = {
    characters: null,
    loading: true,
  }

  async componentDidMount() {
    this.setState(()=>({loading: true}));

    const results = await getCharacters(1,24,77);
    this.setState(()=>({characters: results, loading: false}));
  }

  render() {
    const { characters } = this.state;
    return this.state.loading === true
      ? <div>loading</div>
      : <div>
          <div className='characters-container'>
            {characters.map(character => {
              if(character.id === 1) {
                return (
                  <Character key={character.id} data={character} special={true} />
                )
              } else {
                return <Character key={character.id} data={character} />
              }
            })}
          </div>
          <Link className='button center' to='/characters'>
          View All Characters
          </Link>
        </div>
  }
}

export default Home;
