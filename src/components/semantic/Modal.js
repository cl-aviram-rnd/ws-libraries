import React from 'react'
import { Button, Header, Image, Icon, Modal } from 'semantic-ui-react'

const ModalModalExample = () => (
  <div>
    <div className="padd">
      <Modal dimmer="blurring" trigger={<Button>Show Modal</Button>}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='/images/rachel.png' />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
    <div className="padd">
      <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
        <Header icon='archive' content='Archive Old Messages' />
        <Modal.Content>
          <p>
            Your inbox is getting full, would you like us to enable automatic archiving of old messages?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' inverted>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  </div>
)

export default ModalModalExample