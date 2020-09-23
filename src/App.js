import React, { Component } from 'react';
import './App.css';
import { Divider } from 'semantic-ui-react';
import introMessage from './Texts/introMessage';
// import ReactPlayer from 'react-player/youtube';

class App extends Component {
  render = () => {
    return (
      <div className="App">

        <Divider />

        {introMessage()}

      </div>
    );
    }
}

export default App;
