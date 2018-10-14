import React, { Component } from 'react'
import { Dropdown, Icon, Menu, Segment, Input, Label } from 'semantic-ui-react'

// TODO: Update <Search> usage after its will be implemented

class MenuExampleAttached extends Component {
  state = { activeItem: 'inbox', activeItem2: 'gamepad', activeItem3: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleItemClick2 = (e, { name }) => this.setState({ activeItem2: name });
  handleItemClick3 = (e, { name }) => this.setState({ activeItem3: name });

  render() {
    const { activeItem, activeItem2, activeItem3 } = this.state;
    return (
      <div>
        <div className="padd">
          <Menu attached='top'>
            <Dropdown item icon='wrench' simple>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Icon name='dropdown' />
                  <span className='text'>New</span>

                  <Dropdown.Menu>
                    <Dropdown.Item>Document</Dropdown.Item>
                    <Dropdown.Item>Image</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>Open</Dropdown.Item>
                <Dropdown.Item>Save...</Dropdown.Item>
                <Dropdown.Item>Edit Permissions</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Export</Dropdown.Header>
                <Dropdown.Item>Share</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Menu position='right'>
              <div className='ui right aligned category search item'>
                <div className='ui transparent icon input'>
                  <input className='prompt' type='text' placeholder='Search animals...' />
                  <i className='search link icon' />
                </div>
                <div className='results' />
              </div>
            </Menu.Menu>
          </Menu>

          <Segment attached='bottom'>
            <img src='/images/paragraph.png' />
          </Segment>
        </div>
        <div className="padd">
          <Menu vertical>
            <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
              <Label color='teal'>1</Label>
              Inbox
            </Menu.Item>

            <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
              <Label>51</Label>
              Spam
            </Menu.Item>

            <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
              <Label>1</Label>
              Updates
            </Menu.Item>
            <Menu.Item>
              <Input icon='search' placeholder='Search mail...' />
            </Menu.Item>
          </Menu>
        </div>
        <div className="padd">
          <Menu compact icon='labeled'>
            <Menu.Item name='gamepad' active={activeItem2 === 'gamepad'} onClick={this.handleItemClick2}>
              <Icon name='gamepad' />
              Games
            </Menu.Item>

            <Menu.Item
              name='video camera'
              active={activeItem2 === 'video camera'}
              onClick={this.handleItemClick2}
            >
              <Icon name='video camera' />
              Channels
            </Menu.Item>

            <Menu.Item
              name='video play'
              active={activeItem2 === 'video play'}
              onClick={this.handleItemClick2}
            >
              <Icon name='video play' />
              Videos
            </Menu.Item>
          </Menu>
        </div>
        <div className="padd">
          <Segment inverted>
            <Menu inverted secondary>
              <Menu.Item name='home' active={activeItem3 === 'home'} onClick={this.handleItemClick3} />
              <Menu.Item
                name='messages'
                active={activeItem3 === 'messages'}
                onClick={this.handleItemClick3}
              />
              <Menu.Item
                name='friends'
                active={activeItem3 === 'friends'}
                onClick={this.handleItemClick3}
              />
            </Menu>
          </Segment>
        </div>
      </div>
    )
  }
}

export default MenuExampleAttached