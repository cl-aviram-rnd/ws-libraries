/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import * as React from "react";
import { Switch, Icon } from 'antd';

export class SwitchExample extends React.Component {
  // See CheckboxExample for options
  render() {
    return (
      <div>
        <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
        <br />
        <Switch checkedChildren="1" unCheckedChildren="0" />
        <br />
        <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} defaultChecked />
      </div>
    );
  }
}

export default SwitchExample;