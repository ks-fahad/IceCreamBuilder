import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import countBy from '../../Countby';

const Item = ({ name, add, remove, scoops = {} }) => {
    const scoopsByCount = countBy(scoops)
    return (
        <Container >
            <Row className='m-2'>
            <Col>
            <span>{name}</span>
            {scoopsByCount[name] >= 0 ? (
                <span className='text-secondary'>{[' (',scoopsByCount[name],')'].join('')}</span>
            ) : null}
            </Col>
            <Col className='ms-auto'>
                <Button variant="success"
                    onClick={add.bind(this, name)} >
                    +
                </Button>{' '}
                <Button variant="danger"
                    onClick={remove.bind(this, name)} >
                    -
                </Button>
            </Col>
            </Row>
        </Container >
    );
}
export default Item;
