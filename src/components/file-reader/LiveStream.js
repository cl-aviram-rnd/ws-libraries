import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class LiveStream extends Component {

  render() {
    return (
      <div className="padd">
        <ReactPlayer
          url='https://vm2.dashif.org/livesim-chunked/chunkdur_1/ato_7/testpic4_8s/Manifest300.mpd'
          playing
          width={1200}
          height={900}
        />
      </div>
    );
  }
}

export default LiveStream;