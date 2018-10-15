import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class LiveStream extends Component {

  render() {
    return (
      <div className="padd">
        <ReactPlayer
          url={this.props.isLive ? 'https://vm2.dashif.org/livesim-chunked/chunkdur_1/ato_7/testpic4_8s/Manifest300.mpd' : 'http://techslides.com/demos/sample-videos/small.mp4'}
          playing
          controls
          width={1200}
          height={900}
        />
      </div>
    );
  }
}

export default LiveStream;