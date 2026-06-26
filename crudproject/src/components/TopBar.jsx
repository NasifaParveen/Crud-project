import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';






function TopBar() {
  return (
    <div>
      <Navbar className="bg-primary">
      <Container>
        <Navbar.Brand href ="#home" className='text-light'>EMPLOYMENT-CRUD</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
              <Button as={Link} to='/register' variant="secondary">ADD NEW</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th></th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table> */}


    </div>
    
  )
}

export default TopBar
