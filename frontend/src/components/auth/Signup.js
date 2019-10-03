import React, { Component } from 'react'
import MY_SERVICE from '../../services/index';

export default class Signup extends Component {
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
    MY_SERVICE.signup(this.state.user)
      .then((response) => {
        console.log(response.data);
        this.props.history.push('/auth/login')
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
              <label className="label">Registrar</label>
              <form onSubmit={this.onSubmit} >
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
      </div>
    )
  }
}