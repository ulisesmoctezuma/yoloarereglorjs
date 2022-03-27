import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {

    return (
        <h1 className="itemListContainer">{greeting}</h1>
    )
    }

export default ItemListContainer