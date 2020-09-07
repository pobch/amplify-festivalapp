import React, { useState, useEffect } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Container from './Container'
import Footer from './Footer'
import Home from './Home'
import Admin from './Admin'
import Performance from './Performance'

function Router() {
  const [current, setCurrent] = useState('home')
  useEffect(() => {
    setRoute()
    window.addEventListener('hashchange', setRoute)
    return () => window.removeEventListener('hashchange', setRoute)
  }, [])

  function setRoute() {
    const location = window.location.href.split('/')
    const pathname = location[location.length - 1]
    setCurrent(pathname ? pathname : 'home')
  }

  return (
    <HashRouter>
      <Nav current={current} />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/performance/:id" component={Performance} />
        </Switch>
      </Container>
      <Footer />
    </HashRouter>
  )
}

export default Router
