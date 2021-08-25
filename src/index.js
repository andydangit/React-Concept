import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App/index.js';
import './styles/global.css'
import SearchBar from './components/SearchBar/index'


ReactDOM.render(
  <React.StrictMode>
    <SearchBar />
  </React.StrictMode>,
  document.getElementById('root')
);

