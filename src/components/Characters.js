import React, { Component } from 'react'
import PagePicker from './PagePicker'
import Character from './Character'
import { parse } from 'query-string'
import { getAllCharacters } from '../utils/api'

class Characters extends Component {
  state = {
    characters: null,
    currentPage: 1,
    loading: true,
  }

  async componentDidMount() {
    this.setState(()=>({loading: true}));
    this.updatePage(this.props.location.search)
  }

  componentWillReceiveProps(nextProps) {
    this.updatePage(nextProps.location.search)
  }

  async updatePage(page) {
    this.setState(()=>({loading: true}));
    const results = await getAllCharacters(page);
    const currentPage = this.props.location.search === ''
    ? 1 : parse(this.props.location.search).page;
    this.setState(()=>({characters: results, currentPage: currentPage, loading: false}));
  }

  render() {
    const { characters , currentPage } = this.state;

    return this.state.loading === true
      ? <div>loading</div>
      : <div>
          <PagePicker
            category='characters'
            currentPage={currentPage}/>
          <div className='characters-container'>
            {characters.results.map(character => (
              <Character key={character.id} data={character} />
            ))}
          </div>
        </div>
  }
}

export default Characters;
