import React, { Component } from 'react'
import MY_SERVICE from '../../services/index';

export default class Perfil extends Component {
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
          <div class="box "></div>
        <div class="card">
          <div class="card-image">

            <img style="width: 200px; height: 200px" src="{{user.image}}" alt="{{user.name}}">
    
          </div>
          </div>

          <div class="card">
            <div class="card-image">
              <img width="200px" height="200px" src="https://static.thenounproject.com/png/1095867-200.png" alt="profile-image">
          </div>
            </div>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <span class="title is-5" >Nombre:</span> <span class="subtitle is-6"> {{ user.name }} {{ user.lastname }}</span><br>
                  <span class="title is-5" >Email: </span><span class="subtitle is-6"> {{ user.email }}</span><br>
                    <span class="title is-5">Tipo de perfil:</span> <span class="subtitle is-6">{{ user.role }}</span><br>
                      <span class="title is-5">Teléfono: </span><span class="subtitle is-6">{{ user.phonenumber }}</span><br>
                        <footer class="card-footer">
                          <a class="card-footer-item button is-link" href="/profile/{{user._id}}/edit">Editar perfil</a>
                        </footer>
              </div>
              </div>
              </div>

                  
      </div>
    )
  }
}