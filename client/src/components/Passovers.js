import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Passover from './Passover';

const PASSOVERS_QUERY = gql`
  query PassoverQuery($lat: Float!, $long: Float!) {
    isspassovers(lat: $lat, long: $long) {
      response {
        risetime
        duration
      }
    }
  }
`;

export class Passovers extends Component {
  render() {
    return (
      <Fragment>
        <h1 className='display-f my-3'>ISS Passovers</h1>
        <Query query={PASSOVERS_QUERY} variables={({ lat }, { long })}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) return `Enter a valid location to see ISS flyover times`;

            return (
              <Fragment>
                {data.isspassovers.response.map(passover => (
                  <Passover key={passover.risetime} passover={passover} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Passovers;
