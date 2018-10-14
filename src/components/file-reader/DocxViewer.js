import React, { Component } from 'react';
import docx from './SampleSpec.docx';
import FileViewer from 'react-file-viewer';

class DocxViewer extends Component {

  render() {

    return (
      <div>
        <div className="padd">
          <FileViewer
            fileType={'docx'}
            filePath={docx} />
        </div>
      </div>
    );
  }
}

export default DocxViewer;