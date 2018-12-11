import React, { Component } from 'react'
import { getCategoryPage } from '../utils/api'
import { parse } from 'query-string'
import PagePicker from './PagePicker'


const LocationList = ({ list }) => (
  <table className='location-list'>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>dimension</th>
        </tr>
        {list.map(location => {
          return (
            <tr key={location.id}>
              <td>{location.name}</td>
              <td>{location.type}</td>
              <td>{location.dimension}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
)

class Locations extends Component {
  state = {
    locations: null,
    currentPage: 1,
    loading: true,
  }

  async componentDidMount() {
    this.updatePage(this.props.location.search);

  }

  async updatePage(page) {
    this.setState(()=>({loading: true}));
    const results = await getCategoryPage('location', page);
    const currentPage = this.props.location.search === ''
    ? 1 : parse(this.props.location.search).page;
    this.setState(()=>({locations: results, currentPage: currentPage, loading: false}));
    console.log(this.state)
  }

  render() {
    const { currentPage } = this.state;

    return this.state.loading === true
      ? <div>loading</div>
      : <div>
          <PagePicker
            category='location'
            currentPage={currentPage}/>
          <LocationList list={this.state.locations.results} />
        </div>
  }
}

export default Locations;
