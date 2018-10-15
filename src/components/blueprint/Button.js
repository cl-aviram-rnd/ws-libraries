import * as React from "react";

import { AnchorButton, Button, Code, H5, Intent, Switch } from "@blueprintjs/core";
import { Example, handleBooleanChange, handleStringChange, IExampleProps } from "@blueprintjs/docs-theme";

export default class ButtonsExample extends React.Component {
  state = {
    active: false,
    disabled: false,
    iconOnly: false,
    intent: Intent.NONE,
    large: false,
    loading: false,
    minimal: false,
    wiggling: false,
  };

  handleActiveChange = (active) => {
    this.setState({ active: !this.state.active })
  };
  handleDisabledChange = ((disabled) => this.setState({ disabled: !this.state.disabled }));
  handleIconOnlyChange = (iconOnly => this.setState({ iconOnly: !this.state.iconOnly }));
  handleLargeChange = (large => this.setState({ large: !this.state.large }));
  handleLoadingChange = (loading => this.setState({ loading: !this.state.loading }));
  handleMinimalChange = (minimal => this.setState({ minimal: !this.state.minimal }));

  wiggleTimeoutId: number;

  componentWillUnmount() {
    window.clearTimeout(this.wiggleTimeoutId);
  }

  render() {
    const { iconOnly, wiggling, ...buttonProps } = this.state;

    const options = (
      <>
      <H5>Props</H5>
      <Switch label="Active" checked={this.state.active} onChange={this.handleActiveChange} />
      <Switch label="Disabled" checked={this.state.disabled} onChange={this.handleDisabledChange} />
      <Switch label="Large" checked={this.state.large} onChange={this.handleLargeChange} />
      <Switch label="Loading" checked={this.state.loading} onChange={this.handleLoadingChange} />
      <Switch label="Minimal" checked={this.state.minimal} onChange={this.handleMinimalChange} />
      <H5>Example</H5>
      <Switch label="Icons only" checked={this.state.iconOnly} onChange={this.handleIconOnlyChange} />
      </>
    );

    return (
      <Example options={options} {...this.props}>
        <div>
          <p>
            <Code>Button</Code>
          </p>
          <Button
            className={this.state.wiggling ? "docs-wiggle" : ""}
            icon="refresh"
            onClick={this.beginWiggling}
            {...buttonProps}
          >
            {!iconOnly && "Click to wiggle"}
          </Button>
        </div>
        <div>
          <p>
            <Code>AnchorButton</Code>
          </p>
          <AnchorButton
            href="#core/components/button"
            icon="duplicate"
            rightIcon="share"
            target="_blank"
            text={iconOnly ? undefined : "Duplicate this page"}
            {...buttonProps}
          />
        </div>
      </Example>
    );
  }

  beginWiggling = () => {
    window.clearTimeout(this.wiggleTimeoutId);
    this.setState({ wiggling: true });
    this.wiggleTimeoutId = window.setTimeout(() => this.setState({ wiggling: false }), 300);
  };
}