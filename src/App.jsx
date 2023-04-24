import { Routes, Route, Navigate } from "react-router-dom";
import Useparam from "./useparam/Useparam";
import History from "./history/History";
import Saidbar from "./Saidbar/Saidbar";
import Potpis from "./potpiska/Potpis";
import Navbar from "./navbar/Navbar";
import Shorts from "./shorts/Shorts";
import Biblet from "./biblet/Biblet";
import Vedio from "./vedio/Vedio";
import Games from "./games/Games";
import Watch from "./watch/Watch";
import Card from "./cards/Card";
import Musc from "./music/Musc";
import Favo from "./favo/Favo";
import Like from "./like/Like";
import "./App.css";
import NoteFound from "./noteFount/index";

function App() {
  return (
    <>
      <Navbar />
      <Vedio />
      <div className="grid grid-rows-1 grid-flow-col">
        <Saidbar />
        <Routes className="flex-col">
          <Route path={`/games:title`} element={<Useparam />} />
          <Route path={`/:title`} element={<Useparam />} />
          <Route path="/history" element={<History />} />
          <Route path="/biblet" element={<Biblet />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/games" element={<Games />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/pat" element={<Potpis />} />
          <Route path="/music" element={<Musc />} />
          <Route path="/like" element={<Like />} />
          <Route path="/favo" element={<Favo />} />
          <Route path="/" element={<Card />} />
          {/* Catch-all Route for 404 Not Found */}
        </Routes>
      </div>
    
      
    </>
  );
}

export default App;
