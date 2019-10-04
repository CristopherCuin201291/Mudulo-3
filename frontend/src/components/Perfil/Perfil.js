import React, { Component } from 'react'
import MY_SERVICE from '../../services/index';
import { MyContext } from '../../context/context';

export default class Perfil extends Component {

  componentDidMount(){


  }

  render() {
    return (
      <div>
          <h1>Este es el perfil</h1>
          <p>{this.context.state.loggedUser.name}</p>
                  
      </div>
    )
  }
}

Perfil.contextType=MyContext