import React from 'react';
import { Dialog, Button, InputGroup } from "@blueprintjs/core";

import { Sankey } from 'react-vis';

const BLURRED_LINK_OPACITY = 0.3;
const FOCUSED_LINK_OPACITY = 0.6;

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export default class LinkEventSankeyExample extends React.Component {
  state = {
    name: '',
    activeLink: null,
    nodes: [
      {
        "name": "John",
        "color": "hsl(34,60%,40%)"
      },
      {
        "name": "Raoul",
        "color": "hsl(85, 60%, 40%)"
      },
      {
        "name": "Jane",
        "color": "hsl(35, 60%, 40%)"
      }
    ],
    links: [
      {source: 0, target: 1, value: 70, color: getRandomColor()},
      {source: 0, target: 2, value: 70, color: getRandomColor()}
    ],
    dialog: {
      autoFocus: true,
      canEscapeKeyClose: true,
      canOutsideClickClose: true,
      enforceFocus: true,
      isOpen: false,
      usePortal: true
    }
  };

  addNode = () => {
    const nodes = [...this.state.nodes],
      links = [...this.state.links];

    nodes.push({
      name: this.state.name,
      color: `hsl(${getRandomNumber(360)},60%,40%)`
    });

    const reverse = getRandomNumber(1) === 0;
    const source = reverse ? getRandomNumber(nodes.length-2) : nodes.length-1
    const target = reverse ? nodes.length-1 : getRandomNumber(nodes.length-2)

    links.push({
      source,
      target,
      value: getRandomNumber(35)+10,
      color: getRandomColor()
  })

    this.setState({
      name: '',
      nodes,
      links,
      dialog: {
        ...this.state.dialog,
        isOpen: false
      }
    })
  };

  openDialog = () => {
    this.setState({
      dialog: {
        ...this.state.dialog,
        isOpen: !this.state.dialog.isOpen
      }
    })
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.addNode();
    }
  }

  render() {
    const {activeLink} = this.state;

    return (
      <div>
        <Dialog
          className={""}
          icon="info-sign"
          onClose={this.openDialog}
          title="Add New Node"
          {...this.state.dialog}
        >
          <div style={{ padding: '30px' }}>
            <InputGroup
              leftIcon="name"
              onKeyPress={this._handleKeyPress}
              onChange={this.handleChange}
              placeholder="Node name"
              autoFocus
              value={this.state.name}
            />
            <Button style={{marginTop: 15}} onClick={ this.addNode }>Add</Button>
          </div>
        </Dialog>
        <div className="padd">
          <Button
            icon="add"
            onClick={this.openDialog}
          >
            Add New Node
          </Button>
        </div>
        <div className="padd">
          {`${
            activeLink
              ? `${this.state.nodes[activeLink.source.index].name} -> ${
              this.state.nodes[activeLink.target.index].name
              }`
              : 'None'
            } selected`}
        </div>
        <Sankey
          nodes={this.state.nodes.map(d => ({...d}))}
          links={this.state.links.map((d, i) => ({
            ...d,
            opacity:
              activeLink && i === activeLink.index
                ? FOCUSED_LINK_OPACITY
                : BLURRED_LINK_OPACITY
          }))}
          width={1200}
          height={500}
          nodeWidth={30}
          labelRotation={90}
          onLinkMouseOver={node => this.setState({activeLink: node})}
          onLinkMouseOut={() => this.setState({activeLink: null})}
        />
      </div>
    );
  }
}