import React from 'react';

const AllFruits = ({fruits}) => {
    const _fruits = fruits.map(fruit => (
          <div key={fruit.id}>
            <h1>{fruit.name}</h1>
            <p>{fruit.description}</p>
          </div>
        )
    )
    return(
        <div>{_fruits}</div>
    )
}

export default AllFruits;