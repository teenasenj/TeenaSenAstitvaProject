import Button from '@mui/material/Button';
import logo from '../image/logo.png'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
// import {NavLink, Outlet } from "react-router-dom";

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
    
function Admin() {
  const navigate = useNavigate();
    return (
        <>
        <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body-tertiary  rounded container-fluid">
          <AnimationDelay> </AnimationDelay>

           {/* //Logout */}
           <Button variant="contained"
            style={{ marginLeft: '65rem', marginTop: '1rem' }} 
            onClick={() => navigate("/Login")}>
            Logout
           </Button>
           <br></br>
         </nav>
       
           <Typography style={{ marginLeft: '80rem', marginTop: '1rem' }}
            sx={{ 'color': '#3f51b5', fontSize: '2rem' }}>
            Admin
          </Typography>

            <Button variant="contained"
            style={{marginLeft:'1rem'}}
            onClick={() => navigate("/loginfetch")} >
            Login Access
            </Button>
           <br></br>
           <br></br>

           <Button variant="contained"
            style={{marginLeft:'1rem'}}
            onClick={() => navigate("/chemfetch")} >
            Chemist Records
           </Button>
           <br></br>
           <br></br>
        
           <Button variant="contained"
            style={{marginLeft:'1rem'}}
            onClick={() => navigate("/OperatorRegister")} >
            Operator
           </Button>
           <br></br>
           <br></br>
        
           <Button variant="contained"
            style={{marginLeft:'1rem'}}
            onClick={() => navigate("/AddingOperator")} >
            Add Operator
           </Button>
           <br></br>
           <br></br>
        
           <Button variant="contained"
            style={{marginLeft:'1rem'}}
            onClick={() => navigate("/OperatorFetch")} >
            Operator List
           </Button>
        </>)
}
export default Admin;