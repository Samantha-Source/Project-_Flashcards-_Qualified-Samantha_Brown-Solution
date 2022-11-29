import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink, useRouteMatch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import NotFound from "./NotFound";
import CreateDeck from "./CreateDeck";
import Study from "./Study";
import Deck from "./Deck";
import EditDeck from "./EditDeck";
import AddCard from "./AddCard";
import EditCard from "./EditCard";

function Layout() {
  const {path, url} = useRouteMatch();

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Switch>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route path="/decks/new">
            <CreateDeck />
          </Route>

          <Route path="/decks/:deckId">
            <Deck />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route>
            <NotFound />
          </Route>
          
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default Layout;
