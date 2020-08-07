import React from 'react';
import './App.css';
import CardContainer from '../cardContainer/cardContainer';
import { withLDProvider } from 'launchdarkly-react-client-sdk'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo'></div>
      </header>
      <CardContainer /> 
    </div>
  );
}

export default withLDProvider({ 
  clientSideID: '5f2c97f1b21c10086bfcdaaa',
  user: {
      "key": "user_key",
      "name": "User Name",
      "email": "User@email.com"
  }
})(App);