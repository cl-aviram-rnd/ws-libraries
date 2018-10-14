import React, { Component } from 'react';

let image, canvas, ctx, scale;

class FaceDetection extends Component {
  componentDidMount() {
    setTimeout(() => {
      image = document.getElementById('image');
      canvas = document.getElementById('canvas');
      ctx = canvas.getContext("2d");
      image.crossOrigin = "Anonymous";
      ctx.drawImage(image,
        0, 0, image.width, image.height,
        0, 0, canvas.width, canvas.height);

      scale = canvas.width / image.width;
    }, 500)
  }

  detectFace = () => {
    if (window.FaceDetector == undefined) {
      console.error('Face Detection not supported');
      return;
    }

    let faceDetector = new window.FaceDetector();
    faceDetector.detect(image)
      .then(faces => {
        console.log('detected ' + faces.length + ' faces');
        // Draw the faces on the <canvas>.
        let ctx = document.getElementById('canvas').getContext("2d");
        ctx.lineWidth = 2;
        for(let i = 0; i < faces.length; i++) {
          const face = faces[i].boundingBox;
          ctx.beginPath();
          ctx.strokeStyle = "red";
          ctx.rect(Math.floor(face.x * scale),
            Math.floor(face.y * scale),
            Math.floor(face.width * scale),
            Math.floor(face.height * scale));
          ctx.stroke();

        }

        // Add the faces as strings to the <footer>
        let footer = document.getElementsByTagName('footer')[0];
        footer.innerHTML =
          '<p>Detected ' + faces.length + ' faces</p><ul>';
        for(let i = 0; i < faces.length; i++) {
          const face = faces[i].boundingBox;
          footer.innerHTML +=
            '<li>@ (' + face.x + ',' + face.y + '), size ' +
            face.width + 'x' + face.height + '</li>';
        }
        footer.innerHTML += '</ul>';

      }).catch((e) => {
      console.log('no');
      console.error("Boo, Face Detection failed: " + e);
    })
  }

  detectText = () => {
    if (window.TextDetector == undefined) {
      console.error('Text Detection not supported');
      return;
    }

    let TextDetector = new window.TextDetector();
    TextDetector.detect(image)
      .then(texts => {
        console.log(texts);
        console.log('detected ' + texts.length + ' texts');
        let ctx = document.getElementById('canvas').getContext("2d");
        ctx.lineWidth = 2;
        for(let i = 0; i < texts.length; i++) {
          const text = texts[i].boundingBox;
          ctx.beginPath();
          ctx.strokeStyle = "red";
          ctx.rect(Math.floor(text.x * scale),
            Math.floor(text.y * scale),
            Math.floor(text.width * scale),
            Math.floor(text.height * scale));
          ctx.stroke();

        }

        let footer = document.getElementsByTagName('footer')[0];
        footer.innerHTML =
          '<p>Detected ' + texts.length + ' texts</p><ul>';
        for(let i = 0; i < texts.length; i++) {
          const text = texts[i].boundingBox;
          footer.innerHTML +=
            '<li>@ (' + text.x + ',' + text.y + '), size ' +
            text.width + 'x' + text.height + '</li>';
        }
        footer.innerHTML += '</ul>';

      }).catch((e) => {
      console.log('no');
      console.error("Boo, Text Detection failed: " + e);
    })
  }

  render() {
    return (
      <div>
        <div className="padd">
          <button
            style={{ marginRight: 25 }}
            id="detect faces"
            onClick={this.detectFace}
            className="btn btn-lg btn-primary">
            Detect faces
          </button>
          <button
            id="detect text"
            onClick={this.detectText}
            className="btn btn-lg btn-primary">
            Detect texts
          </button>
        </div>
        <div className="padd">
          <img
            id="image"
            hidden
            crossOrigin="anonymous"
            src="/images/faces.jpg"/>
          <canvas id="canvas" width={453} height={679} />
        </div>
        <footer />
      </div>
    )
  }
}

export default FaceDetection;