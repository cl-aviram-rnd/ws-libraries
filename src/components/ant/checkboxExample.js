/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import * as React from "react";

import { Alignment, Checkbox, H5, Label, Switch } from "@blueprintjs/core";
import { Example, handleBooleanChange, IExampleProps } from "@blueprintjs/docs-theme";

export class CheckboxExample extends React.PureComponent {
  state: ICheckboxExampleState = {
    alignIndicator: Alignment.LEFT,
    disabled: false,
    inline: false,
    large: false,
  };

  render() {
    const options = (
      <>
      <H5>Props</H5>
      <Switch checked={this.state.disabled} label="Disabled" onChange={this.handleDisabledChange} />
      <Switch checked={this.state.inline} label="Inline" onChange={this.handleInlineChange} />
      <Switch checked={this.state.large} label="Large" onChange={this.handleLargeChange} />
      </>
    );

    return (
      <Example options={options} {...this.props}>
        {this.renderExample()}
      </Example>
    );
  }

  renderExample() {
    return (
      <div>
        <Label>Assign responsibility</Label>
        <Checkbox {...this.state} label="Gilad Gray" defaultIndeterminate={true} />
        <Checkbox {...this.state} label="Jason Killian" />
        <Checkbox {...this.state} label="Antoine Llorca" />
      </div>
    );
  }

  // tslint:disable:member-ordering
  handleAlignChange = (alignIndicator: Alignment) => this.setState({ alignIndicator });
  handleDisabledChange = handleBooleanChange(disabled => this.setState({ disabled }));
  handleInlineChange = handleBooleanChange(inline => this.setState({ inline }));
  handleLargeChange = handleBooleanChange(large => this.setState({ large }));
}