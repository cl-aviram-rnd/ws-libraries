/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import * as React from "react";

import { Button, H5, MenuItem, Switch } from "@blueprintjs/core";
import { Example, IExampleProps } from "@blueprintjs/docs-theme";
import { Select } from "@blueprintjs/select";
import { filmSelectProps, TOP_100_FILMS } from "./films";;

export default class SelectExample extends React.PureComponent<IExampleProps, ISelectExampleState> {
  state: ISelectExampleState = {
    disableItems: false,
    disabled: false,
    film: TOP_100_FILMS[0],
    filterable: true,
    hasInitialContent: false,
    minimal: false,
    resetOnClose: false,
    resetOnQuery: true,
    resetOnSelect: false,
  };

  handleDisabledChange = this.handleSwitchChange("disabled");
  handleFilterableChange = this.handleSwitchChange("filterable");
  handleInitialContentChange = this.handleSwitchChange("hasInitialContent");
  handleItemDisabledChange = this.handleSwitchChange("disableItems");
  handleMinimalChange = this.handleSwitchChange("minimal");
  handleResetOnCloseChange = this.handleSwitchChange("resetOnClose");
  handleResetOnQueryChange = this.handleSwitchChange("resetOnQuery");
  handleResetOnSelectChange = this.handleSwitchChange("resetOnSelect");

  render() {
    const { disabled, disableItems, film, minimal, ...flags } = this.state;

    const initialContent = this.state.hasInitialContent ? (
      <MenuItem disabled={true} text={`${TOP_100_FILMS.length} items loaded.`} />
    ) : (
      undefined
    );

    return (
      <Example options={this.renderOptions()} {...this.props}>
        <Select
          {...filmSelectProps}
          {...flags}
          disabled={disabled}
          itemDisabled={this.isItemDisabled}
          initialContent={initialContent}
          noResults={<MenuItem disabled={true} text="No results." />}
          onItemSelect={this.handleValueChange}
          popoverProps={{ minimal }}
        >
          <Button
            icon="film"
            rightIcon="caret-down"
            text={film ? `${film.title} (${film.year})` : "(No selection)"}
            disabled={disabled}
          />
        </Select>
      </Example>
    );
  }

  renderOptions() {
  return (
    <>
    <H5>Props</H5>
    <Switch label="Disabled" checked={this.state.disabled} onChange={this.handleDisabledChange} />
    <Switch label="Filterable" checked={this.state.filterable} onChange={this.handleFilterableChange} />
    <Switch
      label="Reset on close"
      checked={this.state.resetOnClose}
      onChange={this.handleResetOnCloseChange}
    />
    <Switch
      label="Reset on query"
      checked={this.state.resetOnQuery}
      onChange={this.handleResetOnQueryChange}
    />
    <Switch
      label="Reset on select"
      checked={this.state.resetOnSelect}
      onChange={this.handleResetOnSelectChange}
    />
    <Switch
      label="Use initial content"
      checked={this.state.hasInitialContent}
      onChange={this.handleInitialContentChange}
    />
    <Switch
      label="Disable films before 2000"
      checked={this.state.disableItems}
      onChange={this.handleItemDisabledChange}
    />
    <H5>Popover props</H5>
    <Switch
      label="Minimal popover style"
      checked={this.state.minimal}
      onChange={this.handleMinimalChange}
    />
    </>
  );
}

  handleValueChange = (film: IFilm) => this.setState({ film });

  handleSwitchChange(prop) {
  return (event: React.FormEvent<HTMLInputElement>) => {
  const checked = event.currentTarget.checked;
  this.setState(state => ({ ...state, [prop]: checked }));
};
}

isItemDisabled = (film: IFilm) => this.state.disableItems && film.year < 2000;
}

