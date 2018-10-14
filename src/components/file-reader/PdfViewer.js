import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

class PdfViewer extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <div className="padd">
          <Document
            file={'/assets/sample.pdf'}
            onLoadSuccess={this.onDocumentLoad}
            width={600}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p>Page {pageNumber} of {numPages}</p>
        </div>
      </div>
    );
  }
}

export default PdfViewer;