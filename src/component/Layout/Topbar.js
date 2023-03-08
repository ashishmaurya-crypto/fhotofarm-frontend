import React from 'react';
import './style/Topbar.scss';
import { Container, Row, Col } from 'reactstrap';
import { useNavigate} from 'react-router-dom'



export default function Topbar() {
  const navigate = useNavigate();
  return (
    <>
      <Container fluid className='topbar-container'>
        <Row className='pt-1'>
          <Col xs='1'>
            <h5 onClick={()=> navigate("/home", {replace:"true"})}>Home</h5>
          </Col>
          <Col xs='1'>
            <h5 onClick={()=> navigate("/profile", {replace:"true"})}>profile</h5>
          </Col>
          <Col xs='1'>
            <h5 onClick={()=> navigate("/", {replace:"false"})}>feeds</h5>
          </Col>
        </Row>
      </Container>
    </>
  )
}
