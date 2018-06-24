import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/pres/Header'
import State from './components/pres/State'
import Temperatures from './components/pres/Temperatures'
import PrintHead from './components/pres/PrintHead'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Content">
          <State />
          <Temperatures printing />
          <PrintHead />
        </div>
      </div>
    )
  }
}

export default App
