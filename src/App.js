import React from "react";
import { Routes, Route } from 'react-router-dom';

import Header from './layouts/Header'
import BerandaContent from "./BerandaContent";
import Footer from './layouts/Footer'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Header/>
            <BerandaContent/>
            <Footer/>
          </>
        } />
        <Route path='/api' element={
          <>
            <Header/>
            <BerandaContent/>
            <Footer/>
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
