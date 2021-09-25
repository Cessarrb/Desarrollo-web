import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import "./page-artist.css";
import SimilarArtist from "./components/similar-artist.js";

class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
        />
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img
                src="https://m.freelistenonline.com/Content/artists/extralarge/10062.png"
                alt=""
                className="pic-artist margenes50"
              />
              <h2>Gustavo Cerati</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                assumenda, quibusdam tempore voluptas sed aliquid eaque placeat
                earum ad hic.
              </p>
            </div>
          </div>
          <div className="row">{<SimilarArtist />}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
