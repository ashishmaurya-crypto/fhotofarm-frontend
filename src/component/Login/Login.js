import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Endpoints from '../../API/api';
import person from '../Shared/Assets/person.svg';
import lock from '../Shared/Assets/lock.svg';
import eye from '../Shared/Assets/eye.svg';
import eyeslash from '../Shared/Assets/eye-slash.svg';
import facebook from '../Shared/Assets/facebook.svg';
import google from '../Shared/Assets/google.svg';
import LoadingScreen from '../Shared/Component/LoadingScreen';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordVisibilty, setPasswordVisibilty] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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
            <Container fluid className='globle_bg globle_container d-flex justify-content-center'>
                <Container className='my-auto mx-auto d-flex flex-column login-container'>
                    {isLoading ? <LoadingScreen /> : null}
                    <Row>
                        <Col>
                            <h1 className='login-title'>Login</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex flex-column justify-content-center align-items-start'>
                            <label>Email</label>
                            <span className='position-relative  w-100'>
                                <input
                                    type="email"
                                    value={email}
                                    placeholder="email"
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                                <span className='input-logo'><img alt='sas' src={person} /></span></span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex flex-column justify-content-center align-items-start'>
                            <label>password</label>
                            <span className='position-relative w-100'>
                                <span className='input-logo'><img alt='sas' src={lock} /></span>
                                <input
                                    type={passwordVisibilty ? "text" : "password"}
                                    value={password}
                                    placeholder="password"
                                    onChange={(event) => { setPassword(event.target.value) }}
                                />
                                {passwordVisibilty ? <span onClick={() => { setPasswordVisibilty(!passwordVisibilty) }} className='input-eye'><img alt='sas' src={eye} /></span> : <span onClick={() => { setPasswordVisibilty(!passwordVisibilty) }} className='input-eye'><img alt='sas' src={eyeslash} /></span>}
                            </span>
                            <span className='position-relative w-100 mt-1'><p className='position-absolute top-0 end-0'>forgot password?</p></span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mt-5'>
                            <button className='login-button' onClick={() => getLogin()}>LOGIN</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mt-4'>
                            <p>Or Sign Up Using</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col><img alt='sas' src={facebook} /></Col>
                                <Col><img alt='sas' src={google} /></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mt-4'>
                            <button className='signup-button' onClick={() => navigate("/signup", { replace: "false" })}>SIGN UP</button>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )

}

export default Login