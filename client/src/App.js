import React from 'react';
import './App.css';
import Landing from "./components/auth-components/Landing"
import Register from './components/auth-components/Register';
import Application from './components/app-components/Application'
import Tickets from './components/app-components/Tickets';
import Account from './components/app-components/Account';
import Project from "./components/project-view-components/ProjectView"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProjectContextProvider from './contexts/ProjectContext';
import TicketContextProvider from './contexts/TicketContext';
import AuthState from './contexts/AuthContext';

function App() {
  return (
    <>
    <AuthState>
    <ProjectContextProvider>
      <TicketContextProvider>
      <Router>
        <div className='appContainer'>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/app" element={<Application/>} />
          <Route path="/tickets" element={<Tickets/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/project/:projectId" element={<Project/>} />
        </Routes> 
        </div>
      </Router>
      </TicketContextProvider>
    </ProjectContextProvider>
    </AuthState>
    </>
  );
}

export default App;
