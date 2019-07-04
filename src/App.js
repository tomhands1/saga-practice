import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar';
import People from './components/People';
import Counter from './components/Counter';
import Board from './components/Board';
import AutoTimer from './components/AutoTimer';
import BarChart from './components/BarChart';
import LineGraph from './components/LineGraph';
import Todo from './components/Todo';

const App = () => {

  return (
    <div className="app">
      <NavBar />
        <Switch>
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/randompeople" component={People} />
          <Route exact path="/tictactoe" component={Board} />
          <Route exact path="/autotimer" component={AutoTimer} />
          <Route exact path="/barchart" component={BarChart} />
          <Route exact path="/linegraph" component={LineGraph} />
          <Route exact path="/todos" component={Todo} />
        </Switch>
    </div>
  );
};

export default App;
