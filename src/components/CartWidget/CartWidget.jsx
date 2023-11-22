import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div>

      <Link to="/cart">
        <img className='carrito' src="https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532323sy0um.png" alt="" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }

      </Link>
    </div>
  )
}

export default CartWidget
  