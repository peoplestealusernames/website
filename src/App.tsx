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
        <Route path="website/skills" element={
          <ExperiencePage />
        } />
        <Route path="website/projects/db" element={
          <DBPage />
        } />
        <Route path="website/projects/RGB" element={
          <RGBPage />
        } />
        <Route path="website/projects/CCDiscord" element={
          <CCDiscordPage />
        } />
        <Route path="website/test" element={
          <TestTSX />
        } />
        <Route path="website/projects/VEXRobotArm" element={
          <VEXArmPage />
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
