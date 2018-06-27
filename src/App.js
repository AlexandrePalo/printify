import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import Header from './components/cont/Header'
import Manual from './components/scenes/Manual'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Manual />
        </div>
      </Provider>
    )
  }
}

export default App
