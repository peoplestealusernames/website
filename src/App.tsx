import React from 'react';
import logo from './logo.svg';
import './App.css';

import { } from 'react-router'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Naviation';
import { MainPage } from './pages/MainPage';
import { ExperiencePage } from './pages/Experience';
import { ProjectPage } from './pages/ProjectPage/ProjectPage';
import { ContactPage } from './pages/ContactPage';
import { DBPage } from './pages/Projects/DBPage';
import { RGBPage } from './pages/Projects/RGBPage';
import { CCDiscordPage } from './pages/Projects/CCDiscord';
import TestTSX from './pages/Projects/Test';
import { VEXArmPage } from './pages/Projects/VEXArm';

//TODO click on images to enlarge them
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path="" element={
          <MainPage />
        } />
        <Route path="contact" element={
          <ContactPage />
        } />
        <Route path="projects" element={
          <ProjectPage />
        } />
        <Route path="skills" element={
          <ExperiencePage />
        } />
        <Route path="projects/db" element={
          <DBPage />
        } />
        <Route path="projects/RGB" element={
          <RGBPage />
        } />
        <Route path="projects/CCDiscord" element={
          <CCDiscordPage />
        } />
        <Route path="test" element={
          <TestTSX />
        } />
        <Route path="projects/VEXRobotArm" element={
          <VEXArmPage />
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
