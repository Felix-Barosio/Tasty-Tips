import { Routes, Route } from "react-router-dom"
import './App.css';

import Header from "./components/Header";
import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<Aboutus />}></Route>
      </Routes>
    </div>
  );
}

export default App;
