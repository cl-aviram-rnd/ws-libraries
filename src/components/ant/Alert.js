/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import * as React from "react";

import { Alert, Button, H5, Intent, IToaster, Switch, Toaster } from "@blueprintjs/core";
import { Example, handleBooleanChange, IExampleProps } from "@blueprintjs/docs-theme";

export class AlertExample extends React.PureComponent<IExampleProps<IBlueprintExampleData>, IAlertExampleState> {
  state: IAlertExampleState = {
    canEscapeKeyCancel: false,
    canOutsideClickCancel: false,
    isOpen: false,
    isOpenError: false,
  };

  toaster: IToaster;

  handleEscapeKeyChange = handleBooleanChange(canEscapeKeyCancel => this.setState({ canEscapeKeyCancel }));
  handleOutsideClickChange = handleBooleanChange(click => this.setState({ canOutsideClickCancel: click }));

  render() {
    const { isOpen, isOpenError, ...alertProps } = this.state;
    const options = (
      <>
      <H5>Props</H5>
      <Switch
        checked={this.state.canEscapeKeyCancel}
        label="Can escape key cancel"
        onChange={this.handleEscapeKeyChange}
      />
      <Switch
        checked={this.state.canOutsideClickCancel}
        label="Can outside click cancel"
        onChange={this.handleOutsideClickChange}
      />
      </>
    );
    return (
      <Example options={options} {...this.props}>
        <Button onClick={this.handleErrorOpen} text="Open file error alert" />
        <Alert
          {...alertProps}
          className={'light'}
          confirmButtonText="Okay"
          isOpen={isOpenError}
          onClose={this.handleErrorClose}
        >
          <p>
            Couldn't create the file because the containing folder doesn't exist anymore. You will be
            redirected to your user folder.
          </p>
        </Alert>

        <Button onClick={this.handleMoveOpen} text="Open file deletion alert" />
        <Alert
          {...alertProps}
          className={'light'}
          cancelButtonText="Cancel"
          confirmButtonText="Move to Trash"
          icon="trash"
          intent={Intent.DANGER}
          isOpen={isOpen}
          onCancel={this.handleMoveCancel}
          onConfirm={this.handleMoveConfirm}
        >
          <p>
            Are you sure you want to move <b>filename</b> to Trash? You will be able to restore it later,
            but it will become to you.
          </p>
        </Alert>

        <Toaster ref={ref => (this.toaster = ref)} />
      </Example>
    );
  }

  handleErrorOpen = () => this.setState({ isOpenError: true });
  handleErrorClose = () => this.setState({ isOpenError: false });

  handleMoveOpen = () => this.setState({ isOpen: true });
  handleMoveConfirm = () => {
    this.setState({ isOpen: false });
    this.toaster.show({ className: this.props.data.themeName, message: TOAST_MESSAGE });
  };
  handleMoveCancel = () => this.setState({ isOpen: false });
}

const TOAST_MESSAGE = (
  <div>
    <strong>filename</strong> was moved to Trash
  </div>
);

export default AlertExample