import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <>
        <div className='contenedor'>
        <div className='contenedorItem'>
         <img src={img} alt={nombre} />
        <h2> {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias numquam hic molestiae laudantium non provident maxime magni debitis sapiente! Pariatur illum tempore excepturi asperiores, officiis magnam ex placeat quibusdam necessitatibus?</p>
    </div>
        </div>
    </>
  )
}

export default ItemDetail