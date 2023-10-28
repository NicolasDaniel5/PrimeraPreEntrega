import React from 'react'
import './ItemListContainer.css'
import { useState,useEffect } from 'react'
import { getProductos, getProductoCategoria } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {

      const [productos,setProductos] = useState([])
      const {idCategoria} = useParams()

      useEffect(() => {
        const funcionProductos = idCategoria ? getProductoCategoria : getProductos
        funcionProductos(idCategoria)
        .then(res => setProductos(res))
      },[idCategoria])


  return (
    <>
      <div><h1>{props.greeting}</h1></div>
      <ItemList productos = {productos}/>
    </>
    
    
  )
}

export default ItemListContainer