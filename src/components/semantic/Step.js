import React from 'react'
import { Icon, Step, Segment, Image } from 'semantic-ui-react'

const StepExampleGroup = () => (
  <div>
    <div className="padd">
      <Step.Group>
        <Step>
          <Icon name='truck' />
          <Step.Content>
            <Step.Title>Shipping</Step.Title>
            <Step.Description>Choose your shipping options</Step.Description>
          </Step.Content>
        </Step>

        <Step active>
          <Icon name='payment' />
          <Step.Content>
            <Step.Title>Billing</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>

        <Step disabled>
          <Icon name='info' />
          <Step.Content>
            <Step.Title>Confirm Order</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    </div>
    <div className="padd">
      <Step.Group ordered>
        <Step completed>
          <Step.Content>
            <Step.Title>Shipping</Step.Title>
            <Step.Description>Choose your shipping options</Step.Description>
          </Step.Content>
        </Step>

        <Step completed>
          <Step.Content>
            <Step.Title>Billing</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>

        <Step active>
          <Step.Content>
            <Step.Title>Confirm Order</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    </div>
    <div className="padd">
      <Step.Group attached='top'>
        <Step>
          <Icon name='truck' />
          <Step.Content>
            <Step.Title>Shipping</Step.Title>
            <Step.Description>Choose your shipping options</Step.Description>
          </Step.Content>
        </Step>

        <Step active>
          <Icon name='payment' />
          <Step.Content>
            <Step.Title>Billing</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>

        <Step disabled>
          <Icon name='info' />
          <Step.Content>
            <Step.Title>Confirm Order</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>

      <Segment attached>
        <Image src='/images/paragraph.png' />
      </Segment>

      <Step.Group attached='bottom'>
        <Step>
          <Icon name='truck' />
          <Step.Content>
            <Step.Title>Shipping</Step.Title>
            <Step.Description>Choose your shipping options</Step.Description>
          </Step.Content>
        </Step>

        <Step active>
          <Icon name='payment' />
          <Step.Content>
            <Step.Title>Billing</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>

        <Step disabled>
          <Icon name='info' />
          <Step.Content>
            <Step.Title>Confirm Order</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    </div>
  </div>
)

export default StepExampleGroup