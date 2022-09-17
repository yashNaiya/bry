import Landing from "./components/Landing";
import JobMain from "./components/JobMain";
import Authenticate from "./components/Authenticate";
import { Routes, Route } from "react-router-dom"
import ChatMain from "./components/ChatMain";

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/jobpage' element={<JobMain/>}></Route>
      <Route path='/Authentication' element={<Authenticate/>}></Route>
    </Routes>
  );
}

export default App;

