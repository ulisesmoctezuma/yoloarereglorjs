import { BiCartAlt } from 'react-icons/bi';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className="cartWidget">
            < BiCartAlt />
            <span style={{paddingLeft: 5}}>2</span>
        </div>
        )
    }

export default CartWidget