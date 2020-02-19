import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/index.css";
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
document.getElementById('root'));