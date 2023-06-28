
import React from 'react';
import {useNavigate} from "react-router-dom"
import { Box } from '@mui/material';
import logo from '../image/logo.png'
import styled from 'styled-components'
import Button from '@mui/material/Button';  

  const AnimationDelay = styled.div
  `
  width: 300px;
  height: 250px;
  background: url(${logo}) no-repeat bottom center / 60%;
  animation: moveBg 3s ease 1s 1 forwards;
}

@keyframes moveBg {
  100% {
    background: url(${logo}) no-repeat bottom center / 100%;
    }
    `
const Operator = () => {
const navigate = useNavigate();
	
return (
	<>
	 <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body-tertiary  rounded container-fluid">
      <AnimationDelay> </AnimationDelay></nav>

	 <Box sx={{'background':'#00bcd4'}}>
   <h1 style={{color:"blue"}}>Operator</h1>
	 <Button variant="contained"
     style={{marginLeft:'1rem'}}
     onClick={() => navigate("/chemfetch")} >
     Chemist Records
   </Button>
	 </Box>
	</>
)
};

export default Operator;


