import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonExampleGroupOrSize = () => (
  <div>
    <div className="padd">
      <Button.Group size='large'>
        <Button>One</Button>
        <Button.Or />
        <Button>Three</Button>
      </Button.Group>
    </div>
    <div className="padd">
      <Button
        content='Like'
        icon='heart'
        label={{ as: 'a', basic: true, content: '2,048' }}
        labelPosition='right'
      />
      <Button
        content='Like'
        icon='heart'
        label={{ as: 'a', basic: true, pointing: 'right', content: '2,048' }}
        labelPosition='left'
      />
      <Button icon='fork' label={{ as: 'a', basic: true, content: '2,048' }} labelPosition='left' />
    </div>
    <div className="padd">
      <Button content='Primary' primary />
      <Button content='Secondary' secondary />
    </div>
    <div className="padd">
      <Button.Group>
        <Button>Cancel</Button>
        <Button.Or />
        <Button positive>Save</Button>
      </Button.Group>
    </div>
    <div className="padd">
      <Button loading>Loading</Button>
      <Button basic loading>
        Loading
      </Button>
      <Button loading primary>
        Loading
      </Button>
      <Button loading secondary>
        Loading
      </Button>
    </div>
    <div className="padd">
      <Button.Group vertical labeled icon>
        <Button icon='play' content='Play' />
        <Button icon='pause' content='Pause' />
        <Button icon='shuffle' content='Shuffle' />
      </Button.Group>
    </div>
  </div>
)

export default ButtonExampleGroupOrSize