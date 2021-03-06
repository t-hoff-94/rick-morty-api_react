import React, { Component } from 'react'
import { getCategoryPage } from '../utils/api'
import { parse } from 'query-string'
import { Link } from 'react-router-dom'
import PagePicker from './PagePicker'
import slug from 'slug'


const LocationList = ({ list, match }) => (
  <div>
    <table className='table-list' style={{color: '#222'}}>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
        {list.map(location => {
          return (
            <tr key={location.id}>
              <td>
                <Link
                  to={{
                    pathname: `locations/${slug(location.name)}`,
                    search:`id=${location.id}`
                  }}>
                  {location.name}
                </Link>
              </td>
              <td>{location.type}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)

class LocationsPage extends Component {
  state = {
    locations: null,
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
    const results = await getCategoryPage('location', page);
    const numPages = results.info.pages;
    const currentPage = this.props.location.search === ''
    ? 1 : parse(this.props.location.search).page;
    this.setState(()=>({locations: results, numPages: numPages, currentPage: currentPage, loading: false}));
  }

  render() {
    const { currentPage, numPages } = this.state;

    return this.state.loading === true
      ? <div>loading</div>
      : <div>
          <PagePicker
            category='locations'
            numPages={numPages}
            currentPage={currentPage}/>
          <LocationList list={this.state.locations.results} />

        </div>
  }
}

export default LocationsPage;
