import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import Main from './components/cont/Main'
import ResponsiveWrapper from './components/cont/ResponsiveWrapper'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ResponsiveWrapper>
          <Main />
        </ResponsiveWrapper>
      </Provider>
    )
  }
}

export default App
