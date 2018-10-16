import React from 'react'
import { Label, Icon, Form, Divider, Image, Grid, Segment, Menu } from 'semantic-ui-react'

const LabelExampleImage = () => (
  <div>
    <div className="padd">
      <Label as='a' image>
        <img src='/images/joe.jpg' />
        Joe
      </Label>
      <Label as='a' image>
        <img src='/images/elliot.jpg' />
        Elliot
      </Label>
      <Label as='a' image>
        <img src='/images/stevie.jpg' />
        Stevie
      </Label>
    </div>
    <div className="padd">
      <Label image>
        <img src='/images/ade.jpg' />
        Adrienne
        <Icon name='delete' />
      </Label>
      <Label image>
        <img src='/images/zoe.jpg' />
        Zoe
        <Icon name='delete' />
      </Label>
      <Label image>
        <img src='/images/nan.jpg' />
        Nan
        <Icon name='delete' />
      </Label>
    </div>
    <div className="padd">
      <Form>
        <Form.Field>
          <input type='text' placeholder='First name' />
          <Label pointing>Please enter a value</Label>
        </Form.Field>
        <Divider />

        <Form.Field>
          <Label pointing='below'>Please enter a value</Label>
          <input type='text' placeholder='Last Name' />
        </Form.Field>
        <Divider />

        <Form.Field inline>
          <input type='text' placeholder='Username' />
          <Label pointing='left'>That name is taken!</Label>
        </Form.Field>
        <Divider />

        <Form.Field inline>
          <Label pointing='right'>Your password must be 6 characters or more</Label>
          <input type='password' placeholder='Password' />
        </Form.Field>
      </Form>
    </div>
    <div className="padd">
      <Menu compact>
        <Menu.Item as='a'>
          <Icon name='mail' /> Messages
          <Label color='red' floating>
            22
          </Label>
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='users' /> Friends
          <Label color='teal' floating>
            22
          </Label>
        </Menu.Item>
      </Menu>
    </div>
    <div className="padd">
      <Label.Group tag>
        <Label as='a'>$10.00</Label>
        <Label as='a'>$19.99</Label>
        <Label as='a'>$24.99</Label>
        <Label as='a'>$30.99</Label>
        <Label as='a'>$10.25</Label>
      </Label.Group>
    </div>
  </div>
)

export default LabelExampleImage
