import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Passover from './Passover';
import Locationform from './Locationform';

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
    let { lat } = this.props.match.params;
    lat = parseInt(lat);
    let { long } = this.props.match.params;
    long = parseInt(long);

    return (
      <Fragment>
        <Locationform />
        <h1 className='passheader'>ISS Passovers</h1>
        <Query query={PASSOVERS_QUERY} variables={{ lat, long }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) return `Error!: ${error}`;
            console.log(lat);
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
