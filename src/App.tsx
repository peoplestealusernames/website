import React from 'react';
import logo from './logo.svg';
import './App.css';

import { } from 'react-router'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Navigation } from './components/Naviation';
import { MainPage } from './pages/MainPage';
import { ExperiencePage } from './pages/Experience';
import { ProjectPage } from './pages/Projects';
import { ContactPage } from './pages/ContactPage';
import { DBPage } from './pages/Projects/DBPage';
import { RGBPage } from './pages/Projects/RGBPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="website/" element={
            <MainPage />
          } />
          <Route path="website/contact" element={
            <ContactPage />
          } />
          <Route path="website/projects" element={
            <ProjectPage />
          } />
          <Route path="website/experience" element={
            <ExperiencePage />
          } />
          <Route path="website/projects/db" element={
            <DBPage />
          } />
          <Route path="website/projects/RGB" element={
            <RGBPage />
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
