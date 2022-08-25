import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidbaer";
import { Box, Stack } from "@mui/material"
import Navbar from "./components/Navbar"
import Login from "./components/Login";
import Landing from "./components/Landing";


function App() {


  return (
    <Box>
      <Navbar />
      <Box paddingX="5%" paddingY="2%" sx={{paddingX:{sm:"0"}}}>
        <Stack direction="row" spacing={4} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </Box>
    // <Login/>
    // <Landing/>
  );
}

export default App;


