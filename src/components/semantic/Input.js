import React, { Component } from 'react'
import { Input, Dropdown, Label, Button } from 'semantic-ui-react'

const options = [
  { key: '.com', text: '.com', value: '.com' },
  { key: '.net', text: '.net', value: '.net' },
  { key: '.org', text: '.org', value: '.org' },
];

class InputExampleInput extends Component {
  handleRef = (c) => {
    this.inputRef = c
  }

  focus = () => {
    this.inputRef.focus()
  }

  render() {
    return (
      <div>
        <div className="padd">
          <Input placeholder='Search...'/>
        </div>
        <div className="padd">
          <Input loading placeholder='Search...'/>
        </div>
        <div className="padd">
          <Input error placeholder='Search...'/>
        </div>
        <div className="padd">
          <Input
            label={<Dropdown defaultValue='.com' options={options} />}
            labelPosition='right'
            placeholder='Find domain'
          />
        </div>
        <div className="padd">
          <Input labelPosition='right' type='text' placeholder='Amount'>
            <Label basic>$</Label>
            <input />
            <Label>.00</Label>
          </Input>
        </div>
        <div className="padd">
          <Input
            icon='tags'
            iconPosition='left'
            label={{ tag: true, content: 'Add Tag' }}
            labelPosition='right'
            placeholder='Enter tags'
          />
        </div>
        <div className="padd">
          <div>
            <Button content='focus' onClick={this.focus}/>
            <Input ref={this.handleRef} placeholder='Search...'/>
          </div>
        </div>
      </div>
    );
  }
}

export default InputExampleInput
