import React from "react";
import { Routes, Route } from 'react-router-dom';

import Header from './layouts/Header'
import BerandaContent from "./BerandaContent";
import ApiContent from "./ApiContent";
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
            <ApiContent/>
            <Footer/>
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
