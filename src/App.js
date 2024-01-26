import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import SongList from "./components/SongList/SongList";
import SongRow from "./components/SongList/SongRow/SongRow";
import { useState, createContext } from "react";
import TitleSection from "./components/TitleSection/TitleSection";
import MusicUploadForm from "./components/MusicUploadForm/MusicUpload";

export const SongContext = createContext();

function App() {
  const [songs, setSongs] = useState([
    {
      songName: "Halo",
      artistName: "Blackbird Blackbird",
      track: 1,
    },
    {
      songName: "Blind",
      artistName: "Blackbird Blackbird",
      track: 2,
    },
    {
      songName: "Blind",
      artistName: "Blackbird Blackbird",
      track: 3,
    },
    {
      songName: "Blind",
      artistName: "Blackbird Blackbird",
      track: 4,
    },
    {
      songName: "Blind",
      artistName: "Blackbird Blackbird",
      track: 5,
    },
    {
      songName: "Blind",
      artistName: "Blackbird Blackbird",
      track: 6,
    },
  ]);

  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <SongContext.Provider
      value={{ songs, setSongs, selectedFile, setSelectedFile }}
    >
      <div className="App">
        <div className="Header">
          <Header />
          <TitleSection />
          <SongList />
          <SongRow />
          <MusicUploadForm />
        </div>
      </div>
    </SongContext.Provider>
  );
}

export default App;
