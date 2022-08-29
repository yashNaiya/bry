import React, { useState } from 'react'
import { Box, Typography, styled, Button } from '@mui/material'
import Login from './Login'
import MainNav from './MainNav'
import { Stack } from '@mui/system'

const Landing = () => {

  const [show, setShow] = useState(true)
  const onCardClick = function (e) {
    setShow(false)
  }

  const CardStyle = styled("div")(({ theme }) => ({
    display:"none",
    [theme.breakpoints.up("sm")]:{
      display:"flex"
    }
  }))
  if(show){
    return(
      <Box>
      <MainNav />
      <Box paddingX="5%" paddingY="10%" sx={{ paddingX: { sm: "0" }}} >
        <Stack direction={'row'} spacing={4} justifyContent="space-around" p={8}>
          <Button
            onClick={onCardClick}>
            <CardStyle flex={1} p={3}
              display="flex"
              flexDirection={'column'}
              justifyContent={'center'}
              borderRadius={5}
              width="20rem"
              boxShadow={"5px 5px 10px #ccc"}
              sx={{
                ":hover": {
                  boxShadow: "10px 10px 20px #ccc",
                }
              }}
            >
              <Typography variant='h4' fontWeight={100} padding={3}>Want A Job?</Typography>
            </CardStyle >
          </Button>
          <Button
          onClick={onCardClick}>
            <CardStyle flex={1} p={3}
              display="flex"
              width="20rem"
              flexDirection={'column'}
              justifyContent={'center'}
              borderRadius={5}
              boxShadow={"5px 5px 10px #ccc"}
              sx={{
                ":hover": {
                  boxShadow: "10px 10px 20px #ccc"
                }
              }} >
              <Typography variant='h4' fontWeight={100} padding={3}>Want To Hier?</Typography>
            </CardStyle >
          </Button>
        </Stack>
      </Box>
    </Box>
    )
  }
  else{
    return(
      <Login setChange={setShow} />
      )
  }
  // return (
  //   (showBox && <Login setChange={setShow} /> ||
  //     <Box>
  //       <MainNav />
  //       <Box paddingX="5%" paddingY="10%" sx={{ paddingX: { sm: "0" }}} >
  //         <Stack direction={'row'} spacing={4} justifyContent="space-around" p={8}>
  //           <Button
  //             onClick={onCardClick}>
  //             <CardStyle flex={1} p={3}
  //               display="flex"
  //               flexDirection={'column'}
  //               justifyContent={'center'}
  //               borderRadius={5}
  //               width="20rem"
  //               boxShadow={"5px 5px 10px #ccc"}
  //               sx={{
  //                 ":hover": {
  //                   boxShadow: "10px 10px 20px #ccc",
  //                 }
  //               }}
  //             >
  //               <Typography variant='h4' fontWeight={100} padding={3}>Want A Job?</Typography>
  //             </CardStyle >
  //           </Button>
  //           <Button
  //           onClick={onCardClick}>
  //             <CardStyle flex={1} p={3}
  //               display="flex"
  //               width="20rem"
  //               flexDirection={'column'}
  //               justifyContent={'center'}
  //               borderRadius={5}
  //               boxShadow={"5px 5px 10px #ccc"}
  //               sx={{
  //                 ":hover": {
  //                   boxShadow: "10px 10px 20px #ccc"
  //                 }
  //               }} >
  //               <Typography variant='h4' fontWeight={100} padding={3}>Want To Hier?</Typography>
  //             </CardStyle >
  //           </Button>
  //         </Stack>
  //       </Box>
  //     </Box>)
  // )
}

export default Landing
