import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

class AudioPlayer extends Component {

  render() {

    return (
      <div>
        <div className="padd">
          <ReactAudioPlayer
            src="/assets/sample.mp3"
            autoPlay
            controls
          />
        </div>
      </div>
    );
  }
}

export default AudioPlayer;