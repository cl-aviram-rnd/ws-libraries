import React from 'react';
import { Tabs } from 'antd';

import SemanticComponents from './semantic';
import BlueprintComponents from './blueprint';
import AntComponents from './ant';
import FaceDetection from './chrome/FaceDetection';
import Sankey from './nivo/Snakey';
import LiveStream from './file-reader/LiveStream';
import PdfViewer from './file-reader/PdfViewer';
import DocxViewer from './file-reader/DocxViewer';
import AudioPlayer from './file-reader/AudioPlayer';
import NA from './NA';

const TabPane = Tabs.TabPane;

const InnerTabs = ({ component }) => {
  const SemanticToRender = SemanticComponents[component] || NA;
  const BlueprintToRender = BlueprintComponents[component] || NA;
  const AntToRender = AntComponents[component] || NA;

  if (component === 'FaceDetection') {
    return (
      <Tabs type="card">
        <TabPane tab="Face Detection" key="1"><FaceDetection /></TabPane>
      </Tabs>
    )
  }

  if (component === 'LiveStream' || component === 'VideoPlayer') {
    return (
      <Tabs type="card">
        <TabPane tab="Live Stream" key="1"><LiveStream isLive={component === 'LiveStream'} /></TabPane>
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

  if (component === 'AudioPlayer') {
    return (
      <Tabs type="card">
        <TabPane tab="Audio Player" key="1"><AudioPlayer /></TabPane>
      </Tabs>
    )
  }

  if (component === 'Sankey') {
    return (
      <Tabs type="card">
        <TabPane tab="Sankey" key="1"><Sankey /></TabPane>
      </Tabs>
    )
  }

  return (
    <Tabs type="card">
      <TabPane tab="Blueprint" key="1"><BlueprintToRender /></TabPane>
      <TabPane tab="Ant Design" key="3"><AntToRender /></TabPane>
      <TabPane tab="Semantic UI" key="4"><SemanticToRender /></TabPane>
    </Tabs>
  )
};

export default InnerTabs;