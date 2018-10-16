/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import * as React from "react";

import { Button, Card, Classes, Elevation, H5, Label, Slider, Switch } from "@blueprintjs/core";
import { Example, IExampleProps } from "@blueprintjs/docs-theme";

export default class Skeleton extends React.PureComponent {
  state: ICardExampleState = {
    elevation: 0,
    interactive: false
  };

  render() {
    const options = (
      <>
      <H5>Props</H5>
      <Switch checked={this.state.interactive} label="Skeleton" onChange={this.handleInteractiveChange} />
      </>
    );

    return (
      <Example options={options} {...this.props}>
        <Card {...this.state}>
          <H5>
            <a href="#" className={this.state.interactive ? 'bp3-skeleton' : ''}>Analytical applications</a>
          </H5>
          <p className={this.state.interactive ? 'bp3-skeleton' : ''}>
            User interfaces that enable people to interact smoothly with data, ask better questions, and
            make better decisions.
          </p>
        </Card>
      </Example>
    );
  }

  handleElevationChange = (elevation: Elevation) => this.setState({ elevation });
  handleInteractiveChange = () => this.setState({ interactive: !this.state.interactive });
}