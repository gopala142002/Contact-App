import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter as Routers} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
ReactDOM.render(<Routers><App/></Routers>,document.getElementById("root"));