import React from 'react';
import './App.css';
import Landing from "./components/Landing"
import Register from './components/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className='appContainer'>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/register" element={<Register/>} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
