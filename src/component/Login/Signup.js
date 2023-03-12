import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';


const Signup = () => {

    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        birthDate: "",
        gender: "",
    })


    return (
        <>
            <Container fluid className='globle_container d-flex justify-content-center'>
                <Container className='d-flex flex-column signup-container'>
                    <Row>
                        <Col className='d-flex flex-column justify-content-center align-items-start'>
                            <label>First Name</label>
                            <input
                                type="text"
                                value={state.firstName}
                                onChange={(event) => setState({ ...state, [firstName]: event.target.value })}
                                placeholder="First Name"
                            />
                        </Col>
                        <Col className='d-flex flex-column justify-content-center align-items-start'>
                            <label>Last Name</label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={state.lastName}
                                onChange={(event) => setState({ ...state, [lastName]: event.target.value })}
                            />
                        </Col>
                        <Col className='d-flex flex-column justify-content-center align-items-start'>
                            <label>Email</label>
                            <input
                                type="text"
                                value={state.email}
                                onChange={(event) => setState({ ...state, [email]: event.target.value })}
                            />
                        </Col>
                        <Col className='d-flex flex-column justify-content-center align-items-start'>
                            <label>Phone Number</label>
                            <input
                                type="text"
                                value={state.phoneNumber}
                                onChange={(event) => setState({ ...state, [phoneNumber]: event.target.value })}
                            />
                        </Col>
                        <Col className='d-flex flex-column justify-content-center align-items-start'>
                            <label>Password</label>
                            <input
                                type="text"
                                value={state.password}
                                onChange={(event) => setState({ ...state, [password]: event.target.value })}
                            />
                        </Col>
                        <Col className='d-flex flex-column justify-content-center align-items-start'>
                            <label>Confirm Password</label>
                            <input
                                type="text"
                                value={state.confirmPassword}
                                onChange={(event) => setState({ ...state, [confirmPassword]: event.target.value })}
                            />
                        </Col>
                        <Col className='d-flex flex-column justify-content-center align-items-start'>
                            <label>Gender</label>
                            <select
                            
                                onChange={(event) => setState({ ...state, [gender]: event.target.value })}
                            >
                                <option value="M">Male</option>
                                <option value="F">female</option>
                                <option value="Others">others</option>
                            </select>
                        </Col>
                        <Col className='mt-4'>
                            <button className='login-button' onClick={() => getLogin()}>Login</button>
                        </Col>
                        <Col className='mt-4'>
                            <button className='signup-button' onClick={() => navigate("signup", { replace: "true" })}>Signup</button>
                        </Col>

                    </Row>

                </Container>

            </Container>
        </>
    )

}

export default Signup