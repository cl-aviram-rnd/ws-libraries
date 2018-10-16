/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import * as React from "react";
import { Progress } from 'antd';

export class ProgressExample extends React.PureComponent<IExampleProps, IProgressExampleState> {
  render() {

    return (
      <div>
        <Progress type="circle" percent={75} />
        <Progress type="circle" percent={70} status="exception" />
        <Progress type="circle" percent={100} />
      </div>
    );
  }
}

export default ProgressExample