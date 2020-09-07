import 'antd/dist/antd.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Amplify from 'aws-amplify'
import config from './aws-exports'
import Router from './Router'

Amplify.configure(config)

ReactDOM.render(<Router />, document.getElementById('root'))
