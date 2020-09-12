import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import ReactPlayer from 'react-player';
import './App.css';

class App extends Component {
  render = () => {
    return (
      <div className="App">

        <Divider />
        
        <ReactPlayer
        
          url = 'https://youtu.be/MAu9BNxzpcQ'
          controls = 'true'
          light = 'true'
          playing = 'true'

        />

        <Divider />

      </div>
    );
    }
}

export default App;
