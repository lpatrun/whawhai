import React, { useReducer } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeView from './containers/HomeView'
import WarriorsView from './containers/WarriorsView'
import FightView from './containers/FightView'

import { GameContext  } from "./context/context";
import { gameReducer } from "./reducer/reducer";
import {initialGameState} from './state/state';


function App() {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);
  
  return (
    <>
  <Router basename={process.env.PUBLIC_URL}>
        <GameContext.Provider value={{ state, dispatch }}>
            <Switch>
              <Route path="/" exact component={HomeView} />
              <Route path="/warriors" component={WarriorsView} />
              <Route path="/fight" component={FightView} />
              <Route path="*" component={HomeView} />
            </Switch>
         
        </GameContext.Provider>
      </Router>

    </>
  );
}

export default App;
