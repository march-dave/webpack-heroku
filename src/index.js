import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browerHistory, IndexRoute } from 'react-router'

import App from './components/app'
import './styles/app.scss'

render(<App/>, document.getElementById('main'))
