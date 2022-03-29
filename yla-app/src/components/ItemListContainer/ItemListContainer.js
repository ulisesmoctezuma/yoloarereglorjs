import React from 'react';
import { getProducts } from '../../asyncmock';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {

    const [products,setProducts] = useState ([])
    useEffect (() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    console.log(products)

    return (
        <div>
            <h1 className="itemListContainer">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer