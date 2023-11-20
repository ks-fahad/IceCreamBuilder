import React from 'react';
import Items from './Items/Items';
import TotalPrice from './TotalPrice';
import Button from 'react-bootstrap/Button'

const Builder = ({ items, price, add, remove, scoops }) => {
    return (
        <div>
            <div className='p-4 bg-white border rounded'>
                <h3 className='text-center mb-4 text-muted'>Build your own Ice Cream</h3>
                <Items items={items} add={add} remove={remove} scoops={scoops} />
                <TotalPrice price={price} />
                <Button variant="primary container">
                    Add to Cart
                </Button>
            </div>
        </div>
    );
};

export default Builder;
