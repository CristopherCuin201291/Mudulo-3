import React, { Component, createContext } from 'react'
import MY_SERVICE from '../services'

export const MyContext = createContext()

class MyProvider extends Component {
  state = {
    loggedUser: null
  }

  logUser = loggedUser => {
    console.log('este es el usuario de login a context', loggedUser)
    this.setState({ loggedUser })
  }

  logOut = () => {
    MY_SERVICE.logOut()
      .then(response => {
        localStorage.clear()
        console.log(response)
        this.setState({ loggedUser: null })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { state, logUser, logOut } = this
    return (
      <MyContext.Provider value={{ state, logUser, logOut }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider