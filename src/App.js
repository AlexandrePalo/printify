import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import Main from './components/cont/Main'
import Header from './components/cont/Header'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Main />
        </div>
      </Provider>
    )
  }
}

export default App
