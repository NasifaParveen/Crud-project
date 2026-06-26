import React, { use, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




function AddForm() {
  const [Name,Setname] = useState("")
  const[Age,Setage] = useState("")
  const[Designation,SetDesignation] = useState("")
  const[Salary,SetSalary] = useState("")
  const Navigate=useNavigate(); 
  console.log(Name,Age,Designation,Salary)

  const AddEmp=async(e)=>{
    e.preventDefault()
    const body={Name,Age,Designation,Salary}
    try{
      const result=await axios.post("http://localhost:5000/addEmp",body)
      console.log(result)
      alert("employee registered succesfully");
      Navigate("/")
    }
    catch(e){
      console.log(e.response)
      alert(e.response.data.message)
    }
  }
  return(
    <div>
      <Form className="mt-5 w-50 m-auto" onSubmit={AddEmp}>
      <Row>
        <Form.Label column lg={2}>
          NAME
        </Form.Label>
        <Col>
          <Form.Control type="text" placeholder="NAME OF EMPLOYEE" onChange={((e)=>Setname(e.target.value))}/>
        </Col>
      </Row>
      <Row>
        <Form.Label column lg={2}>
          AGE
        </Form.Label>
        <Col>
          <Form.Control type="text" placeholder="AGE" onChange={((e)=>Setage(e.target.value))}/>
        </Col>
      </Row>
      <Row>
        <Form.Label column lg={2}>
          DESIGNATION
        </Form.Label>
        <Col>
          <Form.Control type="text" placeholder="DESIGNATION" onChange={((e)=>SetDesignation(e.target.value))}/>
        </Col>
      </Row>

      <Row>
        <Form.Label column lg={2}>
          SALARY
        </Form.Label>
        <Col>
          <Form.Control type="text" placeholder="SALARY" onChange={((e)=>SetSalary(e.target.value))}/>
          <div className="d-flex justify-content-center">
                <Button variant="success" type='submit'>SAVE</Button>
</div>
        </Col>
      </Row>
            
</Form>
    </div >
  )
}

export default AddForm
