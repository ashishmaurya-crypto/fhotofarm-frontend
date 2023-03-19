import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './style/SideBar.scss';
import { useSelector, useDispatch } from 'react-redux';
import { sideBar } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import cross from './../Shared/Assets/bigX.svg';
import home from './../Shared/Assets/home.svg';

export default function SideBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isSideBarOpen = useSelector((state) => state.sideBar)

    const logout = () => {
        window.localStorage.clear()
        navigate("/", { replace: "true" })
    }
    return (
        <>
            <Container fluid className='sidebar-container'>
                <Container fluid className='sidebar-outer position-relative p-0'>
                    <Container fluid className='sidebar'>
                        <Row>
                            <Col className='d-flex px-4 py-2'>
                                <button onClick={() => dispatch(sideBar(!isSideBarOpen))}>
                                    <img alt="cross button" src={cross} />
                                </button>
                            </Col>
                        </Row>
                        <Row className='tabs' onClick={() => navigate("/home", { replace: "false" })}>
                            <Col className='d-flex justify-content-start align-items-center'>
                                <img alt="home" src={home} />&nbsp;&nbsp;
                                <h5 className='mt-2'>Home</h5>
                            </Col>
                        </Row>
                        <Row className='tabs' onClick={() => navigate("/profile", { replace: "false" })}>
                            <Col className='d-flex justify-content-start align-items-center'>
                                <img alt="home" src={home} />&nbsp;&nbsp;
                                <h5 className='mt-2'>profile</h5>
                            </Col>
                        </Row>
                        <Row className='tabs' onClick={() => navigate("/createfeed", { replace: "false" })}>
                            <Col className='d-flex justify-content-start align-items-center'>
                                <img alt="home" src={home} />&nbsp;&nbsp;
                                <h5 className='mt-2'>feeds</h5>
                            </Col>
                        </Row>
                        <Row className='tabs' onClick={() => logout()}>
                            <Col className='d-flex justify-content-start align-items-center'>
                                <img alt="home" src={home} />&nbsp;&nbsp;
                                <h5 className='mt-2'>Logout</h5>
                            </Col>
                        </Row>

                    </Container>
                    <Container fluid className='sidebar-outer' onClick={() => dispatch(sideBar(!isSideBarOpen))}>
                    </Container>
                </Container>
            </Container>

        </>

    )

}

