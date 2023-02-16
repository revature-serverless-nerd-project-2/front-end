import React from 'react'
import { Alert } from 'react-bootstrap'

function UnauthorizedComponent() {
  return (
    <Alert  variant='danger'>You are not authorized!</Alert>
  )
}

export default UnauthorizedComponent;