import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle, useInputForm } from '../hooks';
import WindowWidth from './WindowWidth';

const NavBar = () => {
  
  const title = useInputForm('App');
  useDocumentTitle(`${title.value}`);
  
  return (
    <div className="navbar-container">
      <div className="app-title">
        Name the App here!
        <input className="title-input" {...title} />
      </div>
      <Link to="/counter">
        <button className="navbar-button">Counter</button>
      </Link>
      <Link to="/randompeople">
        <button className="navbar-button">Random People</button>
      </Link>
      <Link to="/tictactoe">
        <button className="navbar-button">Tic Tac Toe</button>
      </Link>
      <Link to="/autotimer">
        <button className="navbar-button">Auto-Timer</button>
      </Link>
      <Link to="/barchart">
        <button className="navbar-button">Bar Chart</button>
      </Link>
      <Link to="/linegraph">
        <button className="navbar-button">Line Graph</button>
      </Link>
      <Link to="/todos">
        <button className="navbar-button">To Do</button>
      </Link>
      <Link to="/pictures">
        <button className="navbar-button">Pictures</button>
      </Link>
      <WindowWidth />
    </div>
  );
};

export default NavBar;