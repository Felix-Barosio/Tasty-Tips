import { Routes, Route } from "react-router-dom"
import './App.css';

import Header from "./components/Header";
import Aboutus from "./pages/Aboutus";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/about" element={<Aboutus />}></Route>
      </Routes>
    </div>
  );
}

export default App;
