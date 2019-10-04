import React, { Component } from 'react'
import MY_SERVICE from '../../services/index';

export default class Asistencia_Nueva extends Component {
  state = {
    asistencia: {}
  };

  handleInput = (e) => {
    const { asistencia } = this.state;
    const key = e.target.name;
    asistencia[key] = e.target.value;
    this.setState({ asistencia });
  };

  onSubmit = (e) => {
    e.preventDefault();
    MY_SERVICE.postSolicitarAsistencia(this.state.asistencia)
      .then((response) => {
        console.log(response.data);
        this.props.history.push('/auth/asistencias')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <section className="hero is-medium is-info">
          <div className="columns is-mobile is-centered ">
            <div className="box">
              <label className="label">Solicitar Asistencia</label>
              <form onSubmit={this.onSubmit} >

                <div className="field">
                  <div className="control">
                    <div className="select">
                      <select onChange={this.handleInput} name="tipo">
                        <option selected disabled>Selecciona un servicio</option>
                        <option value="Cambio de llanta">Cambio de llanta</option>
                        <option value='Paso de corriente'>Paso de corriente</option>
                        <option value="Servicio de grúa">Servicio de grúa</option>
                        <option value="Abasto de gasolina">Abasto de gasolina</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <div className="control has-icons-left has-icons-right">
                    <input onChange={this.handleInput} name="name" className="input is-success" type="text" placeholder="Ingresa tu nombre" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <div className="control has-icons-left has-icons-right">
                    <input onChange={this.handleInput} name="lastname" className="input is-success" type="text" placeholder="Ingresa tus apellidos" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <div className="control has-icons-left has-icons-right">
                    <input onChange={this.handleInput} name="email" className="input is-success" type="email" placeholder="ejemplo@mail.com" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <div className="control has-icons-left has-icons-right">
                    <input onChange={this.handleInput} name="phonenumber" className="input is-success" type="text" placeholder="Ingresa celular (55-55-55-55-55)" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-info-circle"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <div className="select">
                      <select onChange={this.handleInput} name="role">
                        <option selected disabled>Selecciona tu tipo de perfil</option>
                        <option value="User">Usuario</option>
                        <option value="Fixer">Fixer</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <div className="control has-icons-left has-icons-right">
                    <input onChange={this.handleInput} name="password" className="input is-success" type="password" placeholder="Ingresa tu password" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-info-circle"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </div>
                </div>

                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-success" type="submit">Me quiero registrar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="content has-text-centered">
            <p className="footer-text">
              <p>Por ahora CarFix está disponible sólo en la Ciudad de México</p>
              <p><strong>Carfix</strong> by Cristopher Cuin</p>
              <p>Todos los derechos reservados  2019 ©</p>
            </p>
          </div>
        </footer>
      </div>
    )
  }
}