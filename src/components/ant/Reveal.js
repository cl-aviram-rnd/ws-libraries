import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

const RevealExampleFade = () => (
  <div>
    <div className="padd">
      <Reveal animated='fade'>
        <Reveal.Content visible>
          <Image src='/images/square-image.png' size='small' />
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image src='/images/nan2.jpg' size='small' />
        </Reveal.Content>
      </Reveal>
    </div>
    <div className="padd">
      <Reveal animated='move' instant>
        <Reveal.Content visible>
          <Image src='/images/square-image.png' size='small' />
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image src='/images/chris.jpg' size='small' />
        </Reveal.Content>
      </Reveal>
    </div>
    <div className="padd">
      <Reveal animated='move right'>
        <Reveal.Content visible>
          <Image src='/images/square-image.png' size='small' />
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image src='/images/jenny.jpg' size='small' />
        </Reveal.Content>
      </Reveal>
    </div>
    <div className="padd">
      <Reveal animated='rotate'>
        <Reveal.Content visible>
          <Image circular size='small' src='/images/square-image.png' />
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image circular size='small' src='/images/stevie3.jpg' />
        </Reveal.Content>
      </Reveal>
    </div>
  </div>
)

export default RevealExampleFade