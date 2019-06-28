import React from 'react';
import './App.scss';
import Counter from './components/Counter';
import RandomPerson from './components/RandomPerson';
import PeopleList from './components/PeopleList';
import WindowWidth from './components/WindowWidth';
import Board from './components/Board';
import AutoTimer from './components/AutoTimer';
import { useDocumentTitle, useInputForm } from './hooks';

const App = () => {

  const title = useInputForm('App');
  useDocumentTitle(`${title.value}`);

  return (
    <div className="app">
      <div className="app-title">
        Name the App here!<br />
        <input className="title-input" {...title} />
        <Board />
        <WindowWidth />
      </div>
      <div>
        <Counter />
        <AutoTimer />
      </div>
      <div className="random-people">
        <PeopleList />
        <RandomPerson />
      </div>
    </div>
  );
};

export default App;
