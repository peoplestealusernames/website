import React from 'react';
import logo from './logo.svg';
import './App.css';

import { } from 'react-router'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Navigation } from './components/Naviation';
import { MainPage } from './pages/MainPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectPage } from './pages/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={
            <MainPage />
          } />
          <Route path="/contact" element={
            <ContactPage />
          } />
          <Route path="/projects" element={
            <ProjectPage />
          } />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

/*return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);*/

export default App;
