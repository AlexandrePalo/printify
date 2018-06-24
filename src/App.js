import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/pres/Header'
import State from './components/pres/State'
import Temperatures from './components/pres/Temperatures'
import PrintHead from './components/pres/PrintHead'
import Files from './components/pres/Files'
import Printing from './components/pres/Printing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            alignSelf: 'stretch'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              alignSelf: 'stretch',
              marginBottom: 32
            }}
          >
            <State />
            <Temperatures />
            <Printing />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              alignSelf: 'stretch',
              marginBottom: 32
            }}
          >
            <PrintHead />
            <Files />
          </div>
        </div>
      </div>
    )
  }
}

export default App
