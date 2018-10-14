import React from 'react'
import { Tab } from 'semantic-ui-react'

import InnerTabs from './InnerTabs';

const components = ['Button', 'Card', 'Input', 'Label', 'List', 'Reveal', 'Step', 'Menu',
  'Table', 'Feed', 'Comment', 'Dropdown', 'Modal', 'Progress', 'Sidebar', 'Pagination',
  'Toggle', 'Sankey', 'FaceDetection', 'LiveStream', 'PdfViewer', 'DocxViewer']

const panes = components.map((component) => {
  return {
    menuItem: component, render: () => <InnerTabs component={ component } />
  }
});

const MainTabs = () => (
  <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
);

export default MainTabs;