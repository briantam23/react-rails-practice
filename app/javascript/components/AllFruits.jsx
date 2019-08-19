import React from 'react';
import Fruit from './Fruit';

const AllFruits = ({ fruits, handleUpdate, handleDelete }) => {
    const _fruits = fruits.map(fruit => (
          <div key={fruit.id}>
            <Fruit fruit={fruit} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
          </div>
        )
    )
    return(
        <div>{_fruits}</div>
    )
}

export default AllFruits;