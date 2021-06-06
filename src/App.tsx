import React, { useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import HomeContainer from "./containers/HomeContainer";
import WarriorsContainer from "./containers/WarriorsContainer";
import FightContainer from "./containers/FightContainer";
import ErrorContainer from "./containers/ErrorContainer";
import ResultsContainer from "./containers/ResultsContainer";

import { GameContext } from "./context/gameContext";
import { gameReducer } from "./reducer/gameReducer";
import { initialGameState } from "./state/gameState";

import { ErrorContext } from "./context/errorContext";
import { errorReducer } from "./reducer/errorReducer";
import { initialErrorState } from "./state/errorState";

import { RouteNames } from './enums/RouteNamesEnum';

function App() {
  const [errorState, errorDispatch] = useReducer(errorReducer, initialErrorState);
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  const routes = [{
    path: RouteNames.HOME,
    component: HomeContainer,
  }, {
    path: RouteNames.WARRIORS,
    component: WarriorsContainer,
  }, {
    path: RouteNames.FIGHT_SINGLE,
    component: ResultsContainer,
  }, {
    path: RouteNames.FIGHT,
    component: FightContainer,
  }];

  return (
    <>
      <Router>
        <ErrorContext.Provider value={{ errorState, errorDispatch }}>
          <GameContext.Provider value={{ state, dispatch }}>
            <Switch>
              
            {
              routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />)
            }

              <Redirect to={RouteNames.HOME} />
            </Switch>
            <ErrorContainer />
          </GameContext.Provider>
        </ErrorContext.Provider>
      </Router>
    </>
  );
}

export default App;
