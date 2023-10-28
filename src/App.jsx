import './App.css'
import Item from './components/Item/Item'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBarr from './components/NavBarr/NavBarr'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
      <>
            <BrowserRouter>
              <NavBarr/>
              <Routes>
                <Route path='/' element={<ItemListContainer greeting ="Apple Store"/>}/>
                <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting ="Apple Store"/>}/>
                <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
              </Routes>
            </BrowserRouter>
      </>
  )
}


export default App
