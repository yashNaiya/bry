import { Box } from "@mui/material"
import Landing from "./components/Landing";
import JobMain from "./components/JobMain";
import Authentication from "./components/Authentication";
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