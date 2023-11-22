import './App.css'
import Item from './components/Item/Item'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBarr from './components/NavBarr/NavBarr'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/CheckOut/CheckOut'

const App = () => {
  return (
      <>
            <BrowserRouter>
              <CarritoProvider>
                <NavBarr/>
                <Routes>
                  <Route path='/' element={<ItemListContainer greeting ="Apple Store"/>}/>
                  <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting ="Apple Store"/>}/>
                  <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
                  <Route path='/cart' element={<Cart/>} />
                  <Route path='/checkout' element={<Checkout/>} />
                  <Route path='*' element={<h2>Sitio En Construcción </h2>} />
                </Routes>
              </CarritoProvider>
            </BrowserRouter>
      </>
  )
}


export default App
