import React from 'react'
import { Radio } from 'semantic-ui-react'

const RadioExampleRadio = () => (
  <div>
    <div className="padd">
      <Radio label='Make my profile visible' />
    </div>
    <div className="padd">
      <Radio toggle />
    </div>
    <div className="padd">
      <Radio slider />
    </div>
  </div>
)

export default RadioExampleRadio
