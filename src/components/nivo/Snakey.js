import React from 'react';

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

const nodes = [{name: 'a'}, {name: 'b'}, {name: 'c'}];
const links = [
  {source: 0, target: 1, value: 10, color: getRandomColor()},
  {source: 0, target: 2, value: 20, color: getRandomColor()},
  {source: 1, target: 2, value: 20, color: getRandomColor()},
  {source: 1, target: 2, value: 15, color: getRandomColor()},
  {source: 2, target: 5, value: 30, color: getRandomColor()},
  {source: 2, target: 4, value: 10, color: getRandomColor()},
  {source: 3, target: 5, value: 25, color: getRandomColor()},
  {source: 4, target: 5, value: 30, color: getRandomColor()},
  {source: 4, target: 7, value: 20, color: getRandomColor()},
  {source: 5, target: 7, value: 10, color: getRandomColor()},
  {source: 3, target: 8, value: 10, color: getRandomColor()},
  {source: 1, target: 9, value: 25, color: getRandomColor()},
  {source: 4, target: 9, value: 5, color: getRandomColor()},
  {source: 2, target: 7, value: 15, color: getRandomColor()},
  {source: 1, target: 6, value: 10, color: getRandomColor()},
  {source: 3, target: 6, value: 20, color: getRandomColor()},
  {source: 6, target: 10, value: 20, color: getRandomColor()},
  {source: 3, target: 10, value: 10, color: getRandomColor()},
  {source: 4, target: 10, value: 30}
];

const newNodes = [
  {
    "name": "John",
    "color": "hsl(94, 70%, 50%)"
  },
  {
    "name": "Raoul",
    "color": "hsl(85, 70%, 50%)"
  },
  {
    "name": "Jane",
    "color": "hsl(35, 70%, 50%)"
  },
  {
    "name": "Marcel",
    "color": "hsl(146, 70%, 50%)"
  },
  {
    "name": "Ibrahim",
    "color": "hsl(19, 70%, 50%)"
  },
  {
    "name": "Junko",
    "color": "hsl(40, 70%, 50%)"
  },
  {
    "name": "Lyu",
    "color": "hsl(307, 70%, 50%)"
  },
  {
    "name": "André",
    "color": "hsl(10, 70%, 50%)"
  },
  {
    "name": "Maki",
    "color": "hsl(204, 70%, 50%)"
  },
  {
    "name": "Véronique",
    "color": "hsl(8, 70%, 50%)"
  },
  {
    "name": "Thibeau",
    "color": "hsl(36, 70%, 50%)"
  },
  {
    "name": "Josiane",
    "color": "hsl(106, 70%, 50%)"
  },
  {
    "name": "Raphaël",
    "color": "hsl(154, 70%, 50%)"
  }
]

export default class LinkEventSankeyExample extends React.Component {
  state = {
    activeLink: null
  };

  render() {
    const {activeLink} = this.state;

    // Note: d3.sankey currently mutates the `nodes` and `links` arrays, which doesn't play nice
    // with React's single-direction data flow. We create a copy of each before we pass to the sankey
    // component, just to be sure.
    return (
      <div style={{ transform: [{ rotate: '90deg'}] }}>
        <div>
          {`${
            activeLink
              ? `${newNodes[activeLink.source.index].name} -> ${
              newNodes[activeLink.target.index].name
              }`
              : 'None'
            } selected`}
        </div>
        <Sankey
          nodes={newNodes.map(d => ({...d}))}
          links={links.map((d, i) => ({
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