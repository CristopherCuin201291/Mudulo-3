import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Perfil from './components/Perfil/Perfil';
import Asistencia_Nueva from './components/asistencias-user/Asistencia_Nueva';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth/signup" component={Signup} />
      <Route exact path="/auth/login" component={Login} />
       <Route exact path="/auth/perfil" component={Perfil} />
      <Route exact path="/auth/asistencias/nueva" component={Asistencia_Nueva} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
