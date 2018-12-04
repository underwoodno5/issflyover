import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Passovers from './components/Passovers';
import Geocode from './components/Geocodeform';
import './App.css';
import logo from './earthflag.png';

const client = new ApolloClient({
  uri: '/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className='container'>
            <img
              src={logo}
              alt='World Flag'
              style={{ width: 300, display: 'block', margin: 'auto' }}
            />
            <div className='card'>
              <Route exact path='/' component={Geocode} />
              <Route exact path='/passovers/:lat/:long' component={Passovers} />
              <Route exact path='/geo' component={Geocode} />
            </div>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
