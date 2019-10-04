import React, { Component } from 'react'
import { MyContext } from '../../context/context'
import Footer from '../footer/Footer'

class Perfil extends Component {
  handleClick = e => {
    console.log('click ', e)
  }

  solicitarAsistencia = () => {
    console.log()
    this.props.history.push('/asistencias/nueva')
  }

  verMisAsistencias= () => {
    this.props.history.push('/asistencias')
  }
  editarPerfil = () => {
    this.props.history.push('/perfil/:id/editar')
  }

  render() {
    return (
      <div>
        <nav
          style={{ padding: '.6% 5% .6% 5%', backgroundColor: '#ed5151' }}
          className="navbar navbar-expand-lg navbar-light "> 
              <button
                onClick={this.context.logOut}
                color="#ed5151"
                style={{ border: 'none', borderRadius: '50px', color: '#ed5151' }}
                className="btn  btn-light my-2 my-sm-0">
                Logout
              </button>
          
        </nav>
          <nav>
          <button onClick={this.solicitarAsistencia} key="1">
                Solicitar Asistencia
              </button>
          <button onClick={this.verMisAsistencias} key="2">
                Mis Asistencias
              </button>
          <button onClick={this.editarPerfil} key="3">
                Editar Perfil
              </button>
             
            </nav>
              <Footer />
      </div>
    )
  }
}

Perfil.contextType = MyContext

export default Perfil