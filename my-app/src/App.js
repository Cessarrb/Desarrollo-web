import React, { Component } from "react";
import ArtistCard from "./components/artist-card.js";
import "bootstrap/dist/css/bootstrap.css";
import SearchBar from "./components/search-bar.js";
import PageSearchResult from "./page-search-result.js";
import PageHome from "./page-home.js";
import PageArtist from "./page-artist.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/layout.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/busqueda" component={PageSearchResult} />
            <Route exact path="/artista" component={PageArtist} />
            <Route path="/" component={PageHome} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
