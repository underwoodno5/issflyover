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
    let { lat } = this.props.match.params;
    lat = parseInt(lat);
    let { long } = this.props.match.params;
    long = parseInt(long);
    console.log(lat);
    console.log(long);

    return (
      <Fragment>
        <h1 className='passheader'>ISS Passovers</h1>
        <button
          className='btn btn-warning'
          onClick={() => {
            window.location = `/`;
          }}
        >
          Back!
        </button>
        <Query query={PASSOVERS_QUERY} variables={{ lat, long }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) return `Error!: ${error}`;
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
