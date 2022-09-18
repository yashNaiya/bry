import Landing from "./components/Landing/Landing";
import JobMain from "./components/Job/JobMain";
import Authenticate from "./components/Authenticate/Authenticate";
import { Routes, Route } from "react-router-dom"
import React  from 'react';
import ForgotPassword from "./components/Forgotpassword";
import ProfileMain from "./components/Profile/ProfileMain";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/jobpage' element={<JobMain/>}></Route>
      <Route path='/Authentication' element={<Authenticate/>}></Route>
      <Route path='/forgotpass/:id/:token' element={<ForgotPassword/>}></Route>
      <Route path='/profilepage' element={<ProfileMain/>}></Route>
    </Routes>
  );
}

export default App;

