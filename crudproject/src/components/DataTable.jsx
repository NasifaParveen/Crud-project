import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DataTable() {
  const [allEmp,setEmployee]=useState([])
  const Navigate=useNavigate()
  const getemployee=async()=>{ 
    try{
    const reqres=await axios.get("http://localhost:5000/getEmp");
    // console.log(reqres.data.Employees)
    setEmployee(reqres.data.Employees)
  }
  catch(e){
    console.log(e.response)
  }
}
// getemployee();
useEffect(()=>{getemployee()},[]);
console.log(allEmp);
const deleteEmpDetails=async(id)=>{
  try{
    console.log("hit")
    
const res=await axios.delete(`http://localhost:5000/deleteEmpDetails/${id}`);
console.log(res)
alert("employee deleted successfully");
getemployee();
    Navigate('/')
  }
  catch(e)
  {
console.log(e)
alert(e.response.data.message)
  }
}
  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>SI NO.</th>
          <th>Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {allEmp.map((emp,index)=>(
        <tr key={emp._id}>
          <td>{index+1}</td>
          <td>{emp.name}</td>
              <td>{emp.age}</td>
          <td>{emp.designation}</td>
          <td>{emp.salary}</td>
            <td>      <Button as={Link} to={`/edit/${emp._id}`} variant="primary">edit</Button>
</td>
      <td>      <Button variant="danger" onClick={()=>deleteEmpDetails(emp._id)}>Delete</Button>
</td>


        </tr>
        ))}
        
        {/* <tr>
          <td>2</td>
          <td>adil</td>
          <td>22</td>
          <td>mern stack developer</td>
          <td>50000</td>
          <td>      <Button  as={Link} to='/edit' variant="primary">edit</Button>
</td>
<td>      <Button variant="danger">Delete</Button>
</td>
        </tr> */}
        
      </tbody>
    </Table>
    </div>
  )
}

export default DataTable
