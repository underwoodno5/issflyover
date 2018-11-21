import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Passovers from './components/Passovers';
import Locationform from './components/Locationform';
import './App.css';
import logo from './earthflag.png';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className='container'>
          <img
            src={logo}
            alt='World Flag'
            style={{ width: 300, display: 'block', margin: 'auto' }}
          />
          <Locationform />
          <Passovers />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
