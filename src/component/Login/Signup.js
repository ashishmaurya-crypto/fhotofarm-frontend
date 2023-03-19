import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import person from '../Shared/Assets/person.svg';
import lock from '../Shared/Assets/lock.svg';
import email from '../Shared/Assets/email.svg';
import telephone from '../Shared/Assets/telephone.svg';
import eye from '../Shared/Assets/eye.svg';
import eyeslash from '../Shared/Assets/eye-slash.svg';
import LoadingScreen from '../Shared/Component/LoadingScreen';


const Signup = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        birthDate: "",
        gender: "",
    });
    const [passwordVisibilty, setPasswordVisibilty] = useState(false);
    const [confirmPasswordVisibilty, setConfirmPasswordVisibilty] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const signup = ()=> {
        console.log(state)
    }
    return (
        <>
            <Container fluid className='globle_bg globle_container d-flex justify-content-center'>
                <Container className='my-auto mx-auto d-flex flex-column sign-container'>
                    {isLoading ? <LoadingScreen /> : null}
                    <button className='login-button' onClick={() => navigate("/login", { replace: "true" })}>Back to Login</button>
                    <Row>
                        <Col>
                            <h3 className='login-title'>Sign Up</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex flex-column justify-content-center align-items-start'>
                            <label>First Name</label>
                            <span className='position-relative  w-100'>
                                <input
                                    type="text"
                                    value={state.firstName}
                                    onChange={(event) => setState({ ...state, [event.target.name]: event.target.value })}
                                    placeholder="First Name"
                                    name='firstName'
                                />
                                <span className='input-logo'><img alt='sas' src={person} /></span>
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex flex-column justify-content-center align-items-start'>
                            <label>Last Name</label>
                            <span className='position-relative  w-100'>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={state.lastName}
                                    name='lastName'
                                    onChange={(event) => setState({ ...state, [event.target.name]: event.target.value })}
                                />
                                <span className='input-logo'><img alt='sas' src={person} /></span>
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex flex-column justify-content-center align-items-start'>
                            <label>Email</label>
                            <span className='position-relative  w-100'>
                                <input
                                    type="text"
                                    value={state.email}
                                    placeholder="Email"
                                    name='email'
                                    onChange={(event) => setState({ ...state, [event.target.name]: event.target.value })}
                                />
                                <span className='input-logo'><img alt='sas' src={email} /></span>
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex flex-column justify-content-center align-items-start'>
                            <label>Phone Number</label>
                            <span className='position-relative  w-100'>
                                <input
                                    type="text"
                                    value={state.phoneNumber}
                                    placeholder="Phone Number"
                                    name='phoneNumber'
                                    onChange={(event) => setState({ ...state, [event.target.name]: event.target.value })}
                                />
                                <span className='input-logo'><img alt='sas' src={telephone} /></span>
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex flex-column justify-content-center align-items-start'>
                            <label>Password</label>
                            <span className='position-relative  w-100'>
                                <span className='input-logo'><img alt='sas' src={lock} /></span>
                                <input
                                    type={passwordVisibilty ? "text" : "password"}
                                    value={state.password}
                                    placeholder="password"
                                    name='password'
                                    onChange={(event) => setState({ ...state, [event.target.name]: event.target.value })}
                                />
                                {passwordVisibilty ? <span onClick={() => { setPasswordVisibilty(!passwordVisibilty) }} className='input-eye'><img alt='sas' src={eye} /></span> : <span onClick={() => { setPasswordVisibilty(!passwordVisibilty) }} className='input-eye'><img alt='sas' src={eyeslash} /></span>}
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex flex-column justify-content-center align-items-start'>
                            <label>Confirm Password</label>
                            <span className='position-relative  w-100'>
                                <span className='input-logo'><img alt='sas' src={lock} /></span>
                                <input
                                    type={confirmPasswordVisibilty ? "text" : "password"}
                                    value={state.confirmPassword}
                                    placeholder="Confirm Password"
                                    name='confirmPassword'
                                    onChange={(event) => setState({ ...state, [event.target.name]: event.target.value })}
                                />
                                {confirmPasswordVisibilty ? <span onClick={() => { setConfirmPasswordVisibilty(!confirmPasswordVisibilty) }} className='input-eye'><img alt='sas' src={eye} /></span> : <span onClick={() => { setConfirmPasswordVisibilty(!confirmPasswordVisibilty) }} className='input-eye'><img alt='sas' src={eyeslash} /></span>}
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex flex-column justify-content-center align-items-start'>
                            <label>Gender</label>
                            <select
                                value={state.gender}
                                name='gender'
                                onChange={(event) => setState({ ...state, [event.target.name]: event.target.value })}
                            >
                                <option value="">Select Gender</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                <option value="Others">Others</option>
                            </select>

                        </Col>
                    </Row>
                    <Row>
                        <Col className='mt-4'>
                            <button className='signup-button' onClick={()=> signup()}>SIGN UP</button>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )

}

export default Signup