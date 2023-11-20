import React from 'react';
import logo from '../assets/logo.svg';
import UserImage from '../assets/user2.jpg';
import { Container, Row, Col } from 'react-bootstrap';


const Header = () => {
    return (
        <Container fluid className="bg-light px-3 py-1 border-bottom mb-3">
            <Row>
                <Col className='h2'>
                    <span className='text-primary'>Ice</span>
                    <span className='text-warning'>Cream</span>
                    <span className='text-success'>Builder</span>
                </Col>
                <Col className="d-flex flex-row-reverse me-4">
                    <div className='ps-2 my-auto h5'><strong>Fahad Hossain</strong></div>
                    <img src={UserImage}
                        className='rounded-circle'
                        alt="User" style={{
                            height: '50px',
                            verticalAlign: 'middle'
                        }} />
                </Col>
            </Row>
        </Container>
    );
};

export default Header;