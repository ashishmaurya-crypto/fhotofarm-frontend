import React from 'react';
import './style/Topbar.scss';
import { Container, Row, Col } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import hemburgur from './../Shared/Assets/hemburgur.svg'
import { useSelector, useDispatch } from 'react-redux';
import { sideBar } from '../../redux/actions';



export default function Topbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector((state) => state.sideBar)
  console.log('sidebar', isSideBarOpen)
  return (
    <>
      <Container fluid className='topbar-container'>
        <Row className='px-4'>
          <Col onClick={()=> dispatch(sideBar(!isSideBarOpen))}>
            <img src={hemburgur} />
          </Col>
          <Col>
            <h5 onClick={() => navigate("/home", { replace: "false" })}>Home</h5>
          </Col>
          <Col>
            <h5 onClick={() => navigate("/profile", { replace: "false" })}>profile</h5>
          </Col>
          <Col>
            <h5 onClick={() => navigate("/createfeed", { replace: "false" })}>feeds</h5>
          </Col>
        </Row>
      </Container>
    </>
  )
}
