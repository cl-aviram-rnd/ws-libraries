import React from 'react';
import { Tabs } from 'antd';

import SemanticComponents from './semantic';
import FaceDetection from './chrome/FaceDetection';
import Sankey from './nivo/Snakey';
import LiveStream from './file-reader/LiveStream';
import PdfViewer from './file-reader/PdfViewer';
import DocxViewer from './file-reader/DocxViewer';

const TabPane = Tabs.TabPane;

const InnerTabs = ({ component }) => {
  const SemanticToRender = SemanticComponents[component];

  if (component === 'FaceDetection') {
    return (
      <Tabs type="card">
        <TabPane tab="Face Detection" key="1"><FaceDetection /></TabPane>
      </Tabs>
    )
  }

  if (component === 'LiveStream') {
    return (
      <Tabs type="card">
        <TabPane tab="Live Stream" key="1"><LiveStream /></TabPane>
      </Tabs>
    )
  }

  if (component === 'PdfViewer') {
    return (
      <Tabs type="card">
        <TabPane tab="Pdf Viewer" key="1"><PdfViewer /></TabPane>
      </Tabs>
    )
  }

  if (component === 'DocxViewer') {
    return (
      <Tabs type="card">
        <TabPane tab="Docx Viewer" key="1"><DocxViewer /></TabPane>
      </Tabs>
    )
  }

  else if (component === 'Sankey') {
    return (
      <Tabs type="card">
        <TabPane tab="Sankey" key="1"><Sankey /></TabPane>
      </Tabs>
    )
  }

  else {
    return (
      <Tabs type="card">
        <TabPane tab="Blueprint" key="1">Content of Blueprint Library</TabPane>
        <TabPane tab="Ant Design" key="3">Content of Ant Design Library</TabPane>
        <TabPane tab="Semantic UI" key="4"><SemanticToRender /></TabPane>
      </Tabs>
    )
  }
};

export default InnerTabs;