import firebase from './initfirebase';
import React, { useEffect, useState } from 'react';
import Header from './components/Header.js';
import Home from './Home';
import Navbar from "./components/Navbar";

import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
