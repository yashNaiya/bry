import Landing from "./components/Landing";
import JobMain from "./components/JobMain";
import Authenticate from "./components/Authenticate";
import { Routes, Route } from "react-router-dom"
import ChatMain from "./components/ChatMain";
import React, { Component }  from 'react';
import ForgotPassword from "./components/Forgotpassword";

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/jobpage' element={<JobMain/>}></Route>
      <Route path='/Authentication' element={<Authenticate/>}></Route>
      <Route path='/forgotpass/:id/:token' element={<ForgotPassword/>}></Route>
    </Routes>
  );
}

export default App;

