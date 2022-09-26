import Landing from "./components/Landing/Landing";
import JobMain from "./components/Job/seeker/JobMain";
import Authenticate from "./components/Authenticate/Authenticate";
import { Routes, Route } from "react-router-dom"
import React  from 'react';
import ForgotPassword from "./components/Forgotpassword";
import ProfileMain from "./components/Profile/ProfileMain";
import Register from "./components/Landing/Register";
import AddJobMain from "./components/Job/Recruiter/AddJobMain";
import Login from "./components/Landing/Login";
import ReportMain from "./components/Reports/ReportMain";
import DirectoryMain from "./components/Directory/DirectoryMain";
require('dotenv').config();
function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/jobpage' element={<JobMain/>}></Route>
      <Route path='/Authentication' element={<Authenticate/>}></Route>
      <Route path='/forgotpass/:id/:token' element={<ForgotPassword/>}></Route>
      <Route path='/profilepage' element={<ProfileMain/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/addjob' element={<AddJobMain/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/reports' element={<ReportMain/>}></Route>
      <Route path='/friends' element={<DirectoryMain/>}></Route>
    </Routes>
  );
}

export default App;

