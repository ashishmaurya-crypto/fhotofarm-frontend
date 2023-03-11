import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
                <Container fluid className='main_container d-flex justify-content-center'>
                    <Row className='my-auto mx-auto d-flex flex-column'>
                        <Col className='d-flex justify-content-center align-items-center'>
                            <p> dashboard page</p>
                        </Col>
                        <Col className='d-flex flex-column justify-content-center align-items-start'>
                            <label>Name</label>
                            <input />
                            <button className='mt-2'>Saved</button>
                        </Col>
                        <Col className='mt-4'>
                            <button onClick={() => window.localStorage.clear()}>logout</button>
                        </Col>

                    </Row>

                </Container>

            </>
        )
    }

}

export default Dashboard;