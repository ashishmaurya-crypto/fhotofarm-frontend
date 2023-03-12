import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Endpoints from '../../API/api';


const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(()=>{
            if(window.localStorage.getItem('token')){
                navigate("/home", { replace: "true" })
            }else{
                navigate("/", { replace: "true" })
            }
    })


    const getLogin = async () => {
        const url = Endpoints.login

        const bodydata = {
            email: email,
            password: password
        }

        console.log('login', url, bodydata)

        await axios.post(url, bodydata).then((response) => {

            console.log('login-res', response.data);
            window.localStorage.setItem('token', response.data.token);
            navigate("/home", { replace: "true" })


        }).catch((error) => {
            console.log(error)
        })

    }


    return (
        <>

            <Container fluid className='globle_container d-flex justify-content-center'>
                
                <Row className='my-auto mx-auto d-flex flex-column login-container'>
                    <Col className='d-flex flex-column justify-content-center align-items-start'>
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-start'>
                        <label>password</label>
                        <input
                            type="text"
                            value={password}
                            onChange={(event) => { setPassword(event.target.value) }}
                        />
                    </Col>
                    <Col className='mt-4'>
                        <button className='login-button' onClick={() => getLogin()}>Login</button>
                    </Col>
                    <Col className='mt-4'>
                        <button className='signup-button' onClick={()=> navigate("signup", { replace: "true" })}>Signup</button>
                    </Col>
                    
                </Row>
            </Container>
        </>
    )

}

export default Login