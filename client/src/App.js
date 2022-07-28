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
import ProjectContextProvider from './contexts/projects/ProjectContext';
import TicketContextProvider from './contexts/tickets/TicketContext';
import AuthState from './contexts/auth/AuthContext';
import ProtectedRoute from './components/routing-components/ProtectedRoute';
import AlertState from './contexts/alerts/AlertContext';

function App() {
  return (
    <>
    <AuthState>
    <ProjectContextProvider>
      <TicketContextProvider>
      <AlertState>
      <Router>
        <div className='app-container'>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/register" element={<Register/>} />
          <Route element={<ProtectedRoute />}>
            <Route path="/app" element={<Application/>} />
            <Route path="/tickets" element={<Tickets/>} />
            <Route path="/account" element={<Account/>} />
            <Route path="/project/:projectId" element={<Project/>} />
          </Route>
        </Routes> 
        </div>
      </Router>
      </AlertState>
      </TicketContextProvider>
    </ProjectContextProvider>
    </AuthState>
    </>
  );
}

export default App;
