import React, { Component } from 'react'
import { getCategoryPage } from '../utils/api'
import { parse } from 'query-string'
import PagePicker from './PagePicker'
import { Link, Route } from 'react-router-dom'
import slug from 'slug'
import Episode from './Episode'


const EpisodesList = ({ list }) => (
  <table className='location-list' style={{color: '#222'}}>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Episode</th>
          <th>Air date</th>
        </tr>
        {list.map(episode => {
          return (
            <tr key={episode.id}>
              <td>
                <Link
                  to={{
                    pathname: `episodes/${slug(episode.name)}`,
                    search: `id=${episode.id}`
                  }}>
                  {episode.name}
                </Link>
              </td>
              <td>{episode.episode}</td>
              <td>{episode.air_date}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
)

class EpisodesPage extends Component {
  state = {
    episodes: null,
    currentPage: 1,
    numPages: 1,
    loading: true,
  }

  async componentDidMount() {
    this.updatePage(this.props.location.search);
  }

  componentWillReceiveProps(nextProps) {
    this.updatePage(nextProps.location.search);
  }

  async updatePage(page) {
    this.setState(()=>({loading: true}));
    const results = await getCategoryPage('episode', page);
    console.log(results)
    const numPages = results.info.pages;
    const currentPage = this.props.location.search === ''
    ? 1 : parse(this.props.location.search).page;
    this.setState(()=>({episodes: results, numPages: numPages, currentPage: currentPage, loading: false}));
  }

  render() {
    const { episodes, currentPage, numPages } = this.state;
    const { match } = this.props

    return this.state.loading === true
      ? <div>loading</div>
      : <div>
          <h1 style={{textAlign: 'center'}}>Episodes</h1>
          <PagePicker
            category='episodes'
            numPages={numPages}
            currentPage={currentPage}/>
          <EpisodesList list={episodes.results} />
        </div>
  }
}

export default EpisodesPage;
