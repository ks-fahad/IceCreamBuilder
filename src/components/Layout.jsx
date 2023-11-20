import React from 'react';
import bg from '../assets/icecreambg.jpg';
const Background = {
    maxWidth: '100%',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const Layout = ({ children }) => {
    return <div style={Background}>{children}</div>;
};

export default Layout;