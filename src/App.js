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
import PostPage from "./components/Job/seeker/PostPage";
import DirectoryMain from "./components/Directory/DirectoryMain";
import ApplicationsMain from "./components/Applications/ApplicationsMain";
import MyjobsMain from "./components/Jobposted/MyjobsMain";
import JobDetail from "./components/Jobposted/JobDetail";
import ChatMain from "./components/Chat/ChatMain";
import PageNotFound from "./components/PageNotFound"
import ViewProfile from "./components/ViewProfile";

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
      <Route path='/connect' element={<DirectoryMain/>}></Route>
      <Route path='/myapplications' element={<ApplicationsMain/>}></Route>
      <Route path='/myjobs' element={<MyjobsMain/>}></Route>
      <Route path='/viewProfile' element={<ViewProfile/>}></Route>
      <Route path='/chatpage' element={<ChatMain/>}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}

export default App;

