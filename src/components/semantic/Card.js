import React from 'react'
import { Card, Icon, Button, Image, Feed } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
);

const CardExampleCardProps = () => (
  <div>
    <div className="padd">
      <Card
        image='/images/elliot.jpg'
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        extra={extra}
      />
    </div>
    <div className="padd">
      <Card.Group>
        <Card>
          <Card.Content>
            <Image floated='right' size='mini' src='/images/steve.jpg' />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Approve
              </Button>
              <Button basic color='red'>
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image floated='right' size='mini' src='/images/molly.png' />
            <Card.Header>Molly Thomas</Card.Header>
            <Card.Meta>New User</Card.Meta>
            <Card.Description>
              Molly wants to add you to the group <strong>musicians</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Approve
              </Button>
              <Button basic color='red'>
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image floated='right' size='mini' src='/images/jenny.jpg' />
            <Card.Header>Jenny Lawrence</Card.Header>
            <Card.Meta>New User</Card.Meta>
            <Card.Description>Jenny requested permission to view your contact details</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Approve
              </Button>
              <Button basic color='red'>
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
    <div className="padd">
      <Card>
        <Card.Content>
          <Card.Header>Recent Activity</Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label image='/images/jenny.jpg' />
              <Feed.Content>
                <Feed.Date content='1 day ago' />
                <Feed.Summary>
                  You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
            <Feed.Event>
              <Feed.Label image='/images/molly.png' />
              <Feed.Content>
                <Feed.Date content='3 days ago' />
                <Feed.Summary>
                  You added <a>Molly Malone</a> as a friend.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image='/images/elliot.jpg' />
              <Feed.Content>
                <Feed.Date content='4 days ago' />
                <Feed.Summary>
                  You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
    </div>
  </div>
)

export default CardExampleCardProps