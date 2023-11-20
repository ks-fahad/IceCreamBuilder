import React from 'react';
import Item from './Item';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';


const Items = ({ items, add, remove, scoops }) => {
    const flavors = Object.keys(items);

    return (
        <div>
            <ListGroupItem>
                {flavors.map((flavor) => (
                    <Item key={flavor} name={flavor} add={add} remove={remove} scoops={scoops} />
                ))}
            </ListGroupItem>
        </div>
    );
};

export default Items;