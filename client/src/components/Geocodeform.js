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

  //these two functions handle the logging of keys typed into the entry forms
  handleLocation = e => {
    const newLocation = e.target.value;
    this.setState({
      holdingLocation: newLocation,
      location: newLocation
    });
  };

  render() {
    const { holdingLocation } = this.state;
    const { location } = this.state;

    return (
      <div>
        <h4 className='info'>
          Enter your location and press
          <span className='secondarycolor'> submit</span> to check the next{' '}
          <span className='secondarycolor'>10 passes of the ISS</span> . St.
          John's NL is used as an example. Your lat/long will be printed in the
          console and you can double check it here:
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
          {({ error, data }) => {
            //if (networkStatus === 4) return 'Refetching!';
            if (error) return `Error!: ${error}`;
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
