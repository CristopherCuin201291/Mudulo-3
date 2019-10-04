import React, { Component } from 'react'
import MY_SERVICE from '../../services/index';

export default class Login extends Component {
  state = {
    user: {}
  };

  handleInput = (e) => {
    const { user } = this.state;
    const key = e.target.name;
    user[key] = e.target.value;
    this.setState({ user });
  };

  onSubmit = (e) => {
    e.preventDefault();
    MY_SERVICE.login(this.state.user)
      .then((response) => {
        this.context.logUser(response.data.user)
        console.log(response.data);
        this.props.history.push('/auth/perfil')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <section className="hero is-medium is-info is-bold">
          <div className="columns is-mobile is-centered ">
            <div className="box">
              <form onSubmit={this.onSubmit}>
                <label className="label">Iniciar Sesión</label>
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
                    <button className="button is-success" type="submit">Enviar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    )
  }
}