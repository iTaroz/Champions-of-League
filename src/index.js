import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route,Router,Link } from 'react-router-dom';

const AppWithRouter = () => (
  <React.StrictMode><BrowserRouter>
    <App />
  </BrowserRouter></React.StrictMode>
)

ReactDOM.render(<AppWithRouter/>, document.getElementById('root'))

serviceWorker.unregister();