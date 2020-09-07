import React from 'react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function Admin() {
  return (
    <div>
      <h1 style={titleStyle}>Admin</h1>
      <AmplifySignOut />
    </div>
  )
}

const titleStyle = {
  fontWeight: 'normal',
  margin: '0 0 10px 0',
}

export default withAuthenticator(Admin)
