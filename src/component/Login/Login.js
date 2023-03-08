import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Login.scss';
import {useNavigate} from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate();


    return (
        <>

            <Container fluid className='globle_container d-flex justify-content-center'>
                <Row className='my-auto mx-auto d-flex flex-column'>
                    <Col className='d-flex flex-column justify-content-center align-items-start'>
                        <label>Email</label>
                        <input />
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-start'>
                        <label>password</label>
                        <input />
                    </Col>
                    <Col className='mt-4'>
                        <button onClick={()=> navigate("/home", {replace :"true"})}>Login</button>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Login