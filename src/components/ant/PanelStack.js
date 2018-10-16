/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import * as React from "react";

import { Button, H5, Intent, IPanel, IPanelProps, PanelStack, UL } from "@blueprintjs/core";
import { Example, IExampleProps } from "@blueprintjs/docs-theme";

export class PanelStackExample extends React.PureComponent {
  initialPanel: IPanel = {
    component: PanelExample,
    props: {
      panelNumber: 1,
    },
    title: "Panel 1",
  };

  state = {
    currentPanelStack: [this.initialPanel],
  };

  render() {
    const stackList = (
      <>
      <H5>Current stack</H5>
      <UL>{this.state.currentPanelStack.map((p, i) => <li key={i}>{p.title}</li>)}</UL>
      </>
    );
    return (
      <Example options={stackList} {...this.props}>
        <PanelStack
          className="docs-panel-stack-example"
          initialPanel={this.state.currentPanelStack[0]}
          onOpen={this.addToPanelStack}
          onClose={this.removeFromPanelStack}
        />
      </Example>
    );
  }

  addToPanelStack = (newPanel: IPanel) => {
    this.setState({ currentPanelStack: [newPanel, ...this.state.currentPanelStack] });
  };

  removeFromPanelStack = (_lastPanel) => {
    // In this example, the last panel is always the one closed.
    // Using `this.props.closePanel()` is one way to violate this.
    this.setState({ currentPanelStack: this.state.currentPanelStack.slice(1) });
  };
}
// tslint:disable-next-line:max-classes-per-file
class PanelExample extends React.PureComponent {

  render() {
    return (
      <div className="docs-panel-stack-contents-example">
        <Button intent={Intent.PRIMARY} onClick={this.openNewPanel} text="Open new panel" />
      </div>
    );
  }

  openNewPanel = () => {
    const panelNumber = this.props.panelNumber + 1;
    this.props.openPanel({
      component: PanelExample,
      props: { panelNumber },
      title: `Panel ${panelNumber}`,
    });
  };
}

export default PanelStackExample;