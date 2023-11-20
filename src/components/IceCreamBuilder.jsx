import React, { Component } from 'react';
import Builder from './Builder/Builder';
import IceCream from './IceCream/IceCream';
import { Container, Row, Col } from 'react-bootstrap';
import countBy from './Countby';

export default class IceCreamBuilder extends Component {
    state = {
        items: {
            chocolate: 350,
            lemon: 240,
            orange: 260,
            strawberry: 300,
            vanilla: 280
        },
        scoops: [],
        totalPrice: 0,
    };

    /*componentDidMount() {
        fetch('https://console.firebase.google.com/project/ice-cream-51425/firestore/data/~2Fmaintable~2FWlyvlR5zJhp0OOGcSFrL')
            .then((response) => response.json())
            .then((responeData) => {
                this.setState({
                    items: responeData,
                });
            });
    }*/

    addScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];
        workingScoops.push(scoop);
        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice + items[scoop],
            };
        });
    };

    removeScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];

        const scoopIndex = workingScoops.findIndex((sc) => sc === scoop);
        const countArr = countBy(scoops)
        

        if (countArr[scoop] > 0) {
            workingScoops.splice(scoopIndex, 1);
            this.setState((prevState) => {
                return {
                    scoops: workingScoops,
                    totalPrice: prevState.totalPrice - items[scoop],
                };
            });
        }
    };

    render() {
        const { items, totalPrice, scoops } = this.state;
        return (
            <Container fluid="md" style={{ minHeight: '600px' }}>
                <Row>
                    <Col md={7}><IceCream scoops={scoops} /></Col>
                    <Col md={5}><Builder
                        items={items}
                        price={totalPrice}
                        add={this.addScoop}
                        remove={this.removeScoop}
                        scoops={scoops}
                    /></Col>
                </Row>

            </Container>
        );
    }
}
