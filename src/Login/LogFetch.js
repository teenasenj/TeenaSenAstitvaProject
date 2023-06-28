//  import { Grid } from "@mui/material/Grid";
import axios from "axios";
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styled from 'styled-components'
import logo from '../image/logo.png'
import search from '../image/search.png'

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
  }`


function LogFetch() {
  
    const [APIData, setAPIData] = useState([]);
    // const navigate = useNavigate();


  //   const getData = () => {
        
  //       axios.get(`http://localhost:5000/login`)
  //           .then((getData) => {
  //               setAPIData(getData.data);
  //           })
  // }
  

  const getDataId = () => {
    let id = document.getElementById("val").value; 
      axios.get(`http://localhost:5000/login/${id}`)
          .then((getData) => {
              setAPIData(getData.data);
          })
  }

    return (
        <>
    <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body-tertiary  rounded container-fluid">
    <AnimationDelay> </AnimationDelay></nav>
          <br></br>
          <br></br>
          <div className="card-body shadow bg-body-tertiary rounded card " style={{ width: "18rem", marginLeft: '35rem' }}>
              <div className='row'>
                <div className='col-sm-6'>
                <input id="val" type="text" className="form-control" style={{ width: "11rem" }} />
                </div>
                 <div className='col-sm-5'>
                 <img src={search} style={{ width: "2rem" }}  alt="logo"  />
                  </div>
                <br></br>
                <br></br>
              <button className="btn btn-primary d-flex justify-content-center" style={{ width: "5rem" }} onClick={getDataId}>Fetch </button>
              </div>
            </div>
          <br></br>
          <br></br> 
<TableContainer>
<Table sx={{ minWidth: 90 }} aria-label="customized table">
<TableHead>
   {/* table column heading */}
  <TableRow sx={{'backgroundColor':'#2962ff'}}>
    <TableCell sx={{'fontSize':'20px', 'color':'white'}} align="right">Id</TableCell>
    <TableCell sx={{'fontSize':'20px', 'color':'white'}} align="right">Email</TableCell>
    <TableCell sx={{'fontSize':'20px', 'color':'white'}} align="right">Password</TableCell>
  </TableRow>
</TableHead> 
<TableBody>
  {APIData.map((APIData) => (
    <TableRow key={APIData.id}>
      {/* table datas for the respective column */}
      <TableCell align="right">{APIData.id}</TableCell>
      <TableCell align="right">{APIData.email}</TableCell>
      <TableCell align="right">{APIData.password}</TableCell>
    </TableRow>
  ))}
</TableBody>
</Table>
</TableContainer> 
             
   {/* <button onClick={getData}>Datas</button> */}
    </>
    )
}

export default LogFetch;












