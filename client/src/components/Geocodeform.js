import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import TextField from '@material-ui/core/TextField';

const GEOCODE_QUERY = gql`
  query GeocodeQuery($location: String!) {
    geocode(location: $location) {
      results {
        locations {
          latLng {
            lat
            lng
          }
        }
      }
    }
  }
`;

export class Geocodeform extends Component {
  //sets initial states so we con't get a component error
  state = {
    location: "St. John's Newfoundland",
    holdingLocation: "St. John's Newfoundland"
  };

  //these two functions handle the logging of keys typed into our entry forms
  handleLocation = e => {
    const newLocation = e.target.value;
    this.setState({
      holdingLocation: newLocation
    });
  };

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newLocation = e.target.value;
      this.setState({
        location: newLocation
      });
    }
  };

  render() {
    const { holdingLocation } = this.state;
    const { location } = this.state;

    return (
      <div>
        <h4 className='info'>
          Enter your location and press{' '}
          <span className='secondarycolor'>enter</span> to convert it to
          long/lat. Then press <span className='secondarycolor'>submit</span> to
          check the next 10 passes of the ISS . St. John's NL is used as an
          example. You can double check your lat/long here:
          <a
            href='https://www.latlong.net/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            latlong.net
          </a>
        </h4>
        <Query
          query={GEOCODE_QUERY}
          variables={{ location, holdingLocation }}
          notifyOnNetworkStatusChange
        >
          {({ loading, error, data }) => {
            //if (networkStatus === 4) return 'Refetching!';
            if (loading) return <h4>Loading...</h4>;
            if (error) return `Error!: ${error}`;
            //console.log(data.geocode.results[0].locations[0].latLng.lat);
            //console.log(location);
            return (
              <div>
                <form
                  className='container formbox'
                  noValidate
                  autoComplete='off'
                >
                  <TextField
                    label='Location'
                    onChange={this.handleLocation}
                    onKeyDown={this.handleKeyDown}
                    className='textField'
                    value={holdingLocation}
                    margin='normal'
                  />
                </form>
                <br />
                <h6 className='latlng'>
                  Your lat: {data.geocode.results[0].locations[0].latLng.lat}
                  <br />
                  Your long: {data.geocode.results[0].locations[0].latLng.lng}
                </h6>
                <br />
                <button
                  className='btn btn-warning'
                  onClick={() => {
                    window.location = `/passovers/${
                      data.geocode.results[0].locations[0].latLng.lat
                    }:/${data.geocode.results[0].locations[0].latLng.lng}`;
                  }}
                >
                  Submit!
                </button>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Geocodeform;
