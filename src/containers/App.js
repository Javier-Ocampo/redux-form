import React, { Component } from 'react'

import SingInForm from '../components/SingInForm'
import logo from './logo.svg'
import './App.css'


class App extends Component {

  handleSingIn = values => {
    let formResul = ''
    for (let value in values) {
      formResul += `${value} = ${values[value]} \n`
    }
    alert(formResul)
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React and redux-form with Material-UI</h1>
        </header>
        <div className='container'>
          <SingInForm onSubmit={this.handleSingIn} />
        </div>
      </div>
    )
  }
}

export default App
