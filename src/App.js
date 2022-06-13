import React from 'react';
import './App.css';
import Landing from "./components/auth-components/Landing"
import Register from './components/auth-components/Register';
import Dashboard from './components/app-components/Dashboard'

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
          <Route path="/app" element={<Dashboard/>} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
