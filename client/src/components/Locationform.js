import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export class Locationform extends Component {
  //sets initial states so we con't get a component error
  state = {
    lat: '',
    long: ''
  };
  //these two functions handle the logging of keys typed into our entry forms
  handleLat = e => {
    const newLat = e.target.value;
    this.setState({
      lat: newLat
    });
  };

  handleLong = e => {
    const newLong = e.target.value;
    this.setState({
      long: newLong
    });
  };
  //submits the data on enter press
  handleKeyDown = e => {
    if (e.key === 'Enter') {
      //this.props.submit(this.state.nlong, this.state.nat);
      window.location = `/passovers/${this.state.lat}:/${this.state.long}`;
    }
  };

  render() {
    const { long } = this.state;
    const { lat } = this.state;
    console.log(lat);
    console.log(long);
    return (
      <div>
        <h4 className='info'>
          Enter your longitude and latitude and see the date and time for the
          next 10 passes of the International Space Station.
          <br />
          <br />
          Find your lat/long here:
          <a
            href='https://www.latlong.net/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            latlong.net
          </a>
          .
        </h4>

        <form className='container formbox' noValidate autoComplete='off'>
          <TextField
            label='Latitude'
            onChange={this.handleLat}
            onKeyDown={this.handleKeyDown}
            className='textField'
            value={lat}
            margin='normal'
          />
          <TextField
            label='Longitude'
            onChange={this.handleLong}
            onKeyDown={this.handleKeyDown}
            className='textField'
            value={long}
            margin='normal'
          />
        </form>
      </div>
    );
  }
}

export default Locationform;
