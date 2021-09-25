import React from "react";
import ArtistCard from "../components/artist-card";

const url =
  "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=fd2b844101a797bbbce689034d905949&format=json";
async function fech() {
  const response = await fetch(url);
  const data = await response.json();
  console.log("ACTIVADO", data);

  return data;
}

window.addEventListener("load", fech);
