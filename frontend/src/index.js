import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import 'bulma/css/bulma.css';

ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.unregister();
