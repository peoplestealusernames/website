import React from 'react';
import logo from './logo.svg';
import './App.css';

import { } from 'react-router'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Naviation';
import { MainPage } from './pages/MainPage';
import { ExperiencePage } from './pages/Experience';
import { ProjectPage } from './pages/ProjectPage';
import { ContactPage } from './pages/ContactPage';
import { DBPage } from './pages/Projects/DBPage';
import { RGBPage } from './pages/Projects/RGBPage';
import { readdirSync } from 'fs';

function Compile(path: string) {
  const List = readdirSync(path)
  const Ret: { [index: string]: any } = {}

  List.forEach((page: string) => {
    if (IsPage(page)) {
      Ret[page]["PageTSX"] = "Page"//require(path + '/' + page)
    } else {
      Ret[page] = Compile(path + '/' + page)
    }
  });

  return Ret
}

function IsPage(name: string) {
  const split = name.split('.')
  return split[split.length - 1] == "tsx"
}

//TODO: 404 not found page
//TODO: click on images to enlarge them
function App() {
  var Website = Compile("./pages")
  console.log(Website)
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
      </Routes>
    </BrowserRouter>
  )
}

export default App;
