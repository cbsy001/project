
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';


import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (

    <BrowserRouter>

    <Routes>
      
        <Route index element={<Login/>} />
        
        <Route path="/home" element={<Home />} />

    </Routes>

  </BrowserRouter>


  );
}

export default App;

// <div className="App">
//       <Login />
//     </div>
    