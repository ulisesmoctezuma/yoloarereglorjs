import React from 'react';
import { getProducts } from '../../asyncmock';
import { useState, useEffect } from 'react';
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import './ItemList.css';


const ItemList = () => {

  const [products,setProducts] = useState ([])
  useEffect (() => {
      getProducts().then(response => {
          setProducts(response)
      })
  }, [])

  console.log(products)

    return (
      <div className="productConteiner">
      {products.map(product => 
        <Card style={{ width: '18rem' }}>
          <Card.Img  className="imgProducts" variant="top" src={product.img}/>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
            {product.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem><button className='btnEstiloItem'>Ver detalle del producto</button></ListGroupItem>
            <ListGroupItem>Stock: {product.stock}</ListGroupItem>
          </ListGroup>
        </Card>
)}
  </div>
  
    )
}

export default ItemList