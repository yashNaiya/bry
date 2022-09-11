import { Box } from "@mui/material"
import Landing from "./components/Landing";
import JobMain from "./components/JobMain";
import App1 from "./components/App1";
import Changepass from "./components/Changepass";
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/jobpage' element={<JobMain/>}></Route>
    </Routes>
  );
}

export default App;

{/* <Authentication /> */}