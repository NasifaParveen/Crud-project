import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'; 
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function EditForm() {
  const [Name,Setname] = useState("")
  const[Age,Setage] = useState("")
  const[Designation,SetDesignation] = useState("")
  const[Salary,SetSalary] = useState("")
  const {id}=useParams()
  const Navigate=useNavigate()
  const saveEmployeeDetails=async(e)=>{
    e.preventDefault()
    const body={Name,Age,Designation,Salary}
    try{
      const reqres=await axios.put(`http://localhost:5000/saveEmployeeDetails/${id}`,body)
      console.log(reqres);
      alert("update successfully")
      Navigate('/')
    }
    catch(e)
    {
      console.log(e)
      alert(e.response.data.message)
    }
  }
  const getEmployeeDetails=async()=>{
    try{
      const reqres=await axios.get(`http://localhost:5000/getEmpDetails/${id}`);
      console.log(reqres.data.details.name);
      Setname(reqres.data.details.name);
      Setage(reqres.data.details.age);
      SetDesignation(reqres.data.details.designation);
      SetSalary(reqres.data.details.salary);
    }
    catch(e){
      console.log(e.response)
    }
  }
  useEffect(()=>{getEmployeeDetails()},[]);
  console.log(id)
  return (

   <div>
      <Form className="mt-5 w-50 m-auto" onSubmit={saveEmployeeDetails}>
      <Row>
        <Form.Label column lg={2}>
          NAME
        </Form.Label>
        <Col>
          <Form.Control type="NAME" placeholder="NAME OF EMPLOYEE" value={Name} onChange={(e)=>{Setname(e.target.value)}}/>
        </Col>
      </Row>
      <Row>
        <Form.Label column lg={2}>
          AGE
        </Form.Label>
        <Col>
          <Form.Control type="AGE" placeholder="AGE" value={Age} onChange={(e)=>{Setage(e.target.value)}}/>
        </Col>
      </Row>
      <Row>
        <Form.Label column lg={2}>
          DESIGNATION
        </Form.Label>
        <Col>
          <Form.Control type="DESIGNATION" placeholder="DESIGNATION" value={Designation} onChange={(e)=>{SetDesignation(e.target.value)}}/>
        </Col>
      </Row>

      <Row>
        <Form.Label column lg={2}>
          SALARY
        </Form.Label>
        <Col>
          <Form.Control type="SALARY" placeholder="SALARY" value={Salary} onChange={(e)=>{SetSalary(e.target.value)}}/>
          <div className="d-flex justify-content-center">
                <Button variant="success" type='submit'>SAVE</Button>
</div>
        </Col>
      </Row>
            
</Form>
</div>
  )
}

export default EditForm
