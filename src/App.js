import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <main className="mainContainer">
        <Switch>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies">
            <Movies paginationBaseUrl="/movies"></Movies>
          </Route>
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" render={() => <Rentals></Rentals>} />
          <Route path="/not-found" render={() => <NotFound></NotFound>} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
