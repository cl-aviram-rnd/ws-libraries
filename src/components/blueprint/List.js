import React from 'react'
import { Image, List, Button } from 'semantic-ui-react'

const ListExampleAnimated = () => (
  <div>
    <div className="padd">
        <List animated selection verticalAlign='middle'>
          <List.Item>
            <Image avatar src='/images/helen.jpg' />
            <List.Content>
              <List.Header>Helen</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image avatar src='/images/christian.jpg' />
            <List.Content>
              <List.Header>Christian</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image avatar src='/images/daniel.jpg' />
            <List.Content>
              <List.Header>Daniel</List.Header>
            </List.Content>
          </List.Item>
        </List>
    </div>
    <div className="padd">
      <List relaxed='very'>
        <List.Item>
          <Image avatar src='/images/daniel.jpg' />
          <List.Content>
            <List.Header as='a'>Daniel Louise</List.Header>
            <List.Description>
              Last seen watching{' '}
              <a>
                <b>Arrested Development</b>
              </a>{' '}
              just now.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <Image avatar src='/images/stevie.jpg' />
          <List.Content>
            <List.Header as='a'>Stevie Feliciano</List.Header>
            <List.Description>
              Last seen watching{' '}
              <a>
                <b>Bob's Burgers</b>
              </a>{' '}
              10 hours ago.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <Image avatar src='/images/elliot.jpg' />
          <List.Content>
            <List.Header as='a'>Elliot Fu</List.Header>
            <List.Description>
              Last seen watching{' '}
              <a>
                <b>The Godfather Part 2</b>
              </a>{' '}
              yesterday.
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    </div>
    <div className="padd">
      <List divided verticalAlign='middle'>
        <List.Item>
          <List.Content floated='right'>
            <Button>Add</Button>
          </List.Content>
          <Image avatar src='/images/lena.png' />
          <List.Content>Lena</List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>Add</Button>
          </List.Content>
          <Image avatar src='/images/lindsay.png' />
          <List.Content>Lindsay</List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>Add</Button>
          </List.Content>
          <Image avatar src='/images/mark.png' />
          <List.Content>Mark</List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>Add</Button>
          </List.Content>
          <Image avatar src='/images/molly.png' />
          <List.Content>Molly</List.Content>
        </List.Item>
      </List>
    </div>
    <div className="padd">
      <List ordered>
        <List.Item as='a'>Getting Started</List.Item>
        <List.Item as='a'>Introduction</List.Item>
        <List.Item>
          <a>Languages</a>
          <List.List>
            <List.Item as='a'>HTML</List.Item>
            <List.Item as='a'>Javascript</List.Item>
            <List.Item as='a'>CSS</List.Item>
          </List.List>
        </List.Item>
        <List.Item as='a'>Review</List.Item>
      </List>
    </div>
    <div className="padd">
      <List>
        <List.Item>
          <List.Icon name='folder' />
          <List.Content>
            <List.Header>src</List.Header>
            <List.Description>Source files for project</List.Description>
            <List.List>
              <List.Item>
                <List.Icon name='folder' />
                <List.Content>
                  <List.Header>site</List.Header>
                  <List.Description>Your site's theme</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='folder' />
                <List.Content>
                  <List.Header>themes</List.Header>
                  <List.Description>Packaged theme files</List.Description>
                  <List.List>
                    <List.Item>
                      <List.Icon name='folder' />
                      <List.Content>
                        <List.Header>default</List.Header>
                        <List.Description>Default packaged theme</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='folder' />
                      <List.Content>
                        <List.Header>my_theme</List.Header>
                        <List.Description>
                          Packaged themes are also available in this folder
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List.List>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='file' />
                <List.Content>
                  <List.Header>theme.config</List.Header>
                  <List.Description>Config file for setting packaged themes</List.Description>
                </List.Content>
              </List.Item>
            </List.List>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='folder' />
          <List.Content>
            <List.Header>dist</List.Header>
            <List.Description>Compiled CSS and JS files</List.Description>
            <List.List>
              <List.Item>
                <List.Icon name='folder' />
                <List.Content>
                  <List.Header>components</List.Header>
                  <List.Description>Individual component CSS and JS</List.Description>
                </List.Content>
              </List.Item>
            </List.List>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='file' />
          <List.Content>
            <List.Header>semantic.json</List.Header>
            <List.Description>Contains build settings for gulp</List.Description>
          </List.Content>
        </List.Item>
      </List>
    </div>
    <div className="padd">

    </div>
    <div className="padd">

    </div>
    <div className="padd">

    </div>
    <div className="padd">

    </div>
    <div className="padd">

    </div>
    <div className="padd">

    </div>
  </div>
)

export default ListExampleAnimated
