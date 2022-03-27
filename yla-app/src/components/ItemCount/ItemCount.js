import React from 'react';
import {useState} from 'react'
import './ItemCount.css';

const ItemCount = ({initial = 0, stock,onAdd}) => {

    const [count, setCount] = useState (initial)
    
    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count >= 1 )
        setCount(count - 1)
    }

    return (
        <div>
            <p>Productos</p>
            <div className="contenedorContador col-sm-1 col-md-1">
            <button className='btnEstilo' onClick={decrement}>-</button>
            <p className="txtContador">{count}</p>
            <button className='btnEstilo' onClick={increment}>+</button>
            </div>
            <button className='btnEstilo2' onClick={() => onAdd(count)}>Agregar al carrito</button><br></br>
        </div>
    );
}

/* <div>
<button onClick={decrement}>-</button>
<p>{count}</p>
<button onClick={increment}>+</button>
<button onClick={() => onAdd(count)}>Agregar al carrito</button>
</div> */
    
export default ItemCount