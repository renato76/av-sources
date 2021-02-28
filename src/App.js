import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AvSources from './components/AvSources'
import Apple from './components/Apple'
import Netflix from './components/Netflix'



// function component that uses BrowserRouter from react-router-dom to 
// create the links I need.

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/apple" component={Apple} />   
        <Route path="/netflix" component={Netflix} /> 
        <Route exact path="/" component={AvSources} />  
      </Switch>
    </BrowserRouter>
  )
}

export default App
