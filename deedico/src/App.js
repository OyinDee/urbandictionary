import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useNavigate, Routes, Route} from 'react-router-dom'
import Each from './components/Each'

import Home from './components/Home'
function App() {
  return (
      <Routes>
      <Route path="/" element={<Home/>}/>    
      <Route path="/word" element={<Each/>}/>     
      </Routes>
  );
}

export default App;
