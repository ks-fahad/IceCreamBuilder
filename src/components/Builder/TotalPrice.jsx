import React from 'react';

const TotalPrice = ({ price = 0 }) => {
    return (
        <div className="border-top border-secondary py-3 d-flex justify-content-between align-items-center font-weight-bold">
            <div>Total Price</div>
            <div>{price.toFixed(2)} Tk</div>
        </div>
    );
};

export default TotalPrice;
