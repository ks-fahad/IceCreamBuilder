import React from 'react';

const Modal = ({ children }) => {
    return (
        <div>
            <div className="position-fixed top-0 start-0 cursor-pointer display-none bg-secondary"/>
            <div className="position-absolute top-50 start-50 translate-middle cursor-pointer bg-white display-none">{children}</div>
        </div>
    );
};

export default Modal;