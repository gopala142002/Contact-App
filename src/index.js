import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createRoot} from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css';
createRoot(document.getElementById("root")).render(<App/>);