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
                    <Container className='mx-auto'>
                        <div>
                            <Row>
                                <Col>
                                    <h4>Title</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4>Paragraph</h4>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                </Container>

            </>
        )
    }

}

export default Dashboard;