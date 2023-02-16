import React from 'react'
import { Card, Placeholder } from 'react-bootstrap'

function LoadingComponent() {
  return (
    <div>
        <Card role="card" style={{ width: '18rem' }}>
        <Card.Img role="img" variant="top" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button role="button" variant="primary" xs={6} />
        </Card.Body>
      </Card>
    </div>
  )
}

export default LoadingComponent