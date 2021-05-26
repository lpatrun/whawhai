import React, { useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

function App() {
  const [errorState, errorDispatch] = useReducer(errorReducer, initialErrorState);
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  return (
    <>
      <Router>
        <ErrorContext.Provider value={{ errorState, errorDispatch }}>
          <GameContext.Provider value={{ state, dispatch }}>
            <Switch>
              <Route path="/" exact component={HomeContainer} />
              <Route path="/warriors" component={WarriorsContainer} />
              <Route path="/fight/:id" component={ResultsContainer} />
              <Route path="/fight" component={FightContainer} />
              <Route path="*" component={HomeContainer} />
            </Switch>
            <ErrorContainer />
          </GameContext.Provider>
        </ErrorContext.Provider>
      </Router>
    </>
  );
}

export default App;
