import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/pres/Header'
import State from './components/pres/State'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <State connected />
      </div>
    )
  }
}

export default App
