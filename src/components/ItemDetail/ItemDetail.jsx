import { useState } from 'react'
import './ItemDetail.css'
import Contador from '../Contador/Contador'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({id,nombre, precio, img, stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarAlCarrito} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)
    console.log("Productos agregados: " + cantidad)

    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad);
    
  }

  return (
    <>
        <div className='contenedor'>
          <div className='contenedorItem'>
          <img src={img} alt={nombre} />
          <h2> {nombre} </h2>
          <h3>Precio: {precio} </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias numquam hic molestiae laudantium non provident maxime magni debitis sapiente! Pariatur illum tempore excepturi asperiores, officiis magnam ex placeat quibusdam necessitatibus?</p>
          {agregarCantidad > 0 ? (<Link to='/cart'>Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>) }
         </div>
        </div>
    </>
  )
}

export default ItemDetail