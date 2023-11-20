import React from 'react';
import Scoop from './Scoop';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image';
import Cherry from '../../assets/cherry.png';
import Cone from '../../assets/cone.jpg';


const IceCream = ({ scoops }) => {
    // const flavors = Object.keys(scoo);

    return (
        <Container className="d-flex flex-column-reverse justify-content-center align-items-center bg-light bg-opacity-50 rounded-3"
            style={{ height: '100%', width: '100%', minHeight: '500px' }}>
            <p style={{
                maxWidth: '100%',
                backgroundImage: `url(${Cone})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                marginTop: '-20px',
                height: '0',
                width: '0',
                borderRight: '45px solid transparent',
                borderLeft: '45px solid transparent',
                borderTop: '140px solid tan',
                zIndex: 1
            }} />
            {scoops.map((scoop) => (
                <Scoop key={`${scoop}${Math.random()}`} scoop={scoop} />
            ))}
            <Image
                src={Cherry}
                alt="Cherry Image"
                style={{
                    background: 'center/cover no-repeat',
                    width: '50px',
                    height: '77px',
                    zIndex: 3,
                    marginBottom: '-10px',
                }}
            />
        </Container>
    );
};

export default IceCream;
