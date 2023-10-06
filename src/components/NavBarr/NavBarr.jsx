import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBarr.css'


const NavBarr = () => {
  return (
    <header>
        <img src="https://th.bing.com/th/id/R.e62482375fcf2b500bcfd79cf6c83e15?rik=HWqtXv%2fZKUR8LQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fjcx%2fL85%2fjcxL85eoi.jpg&ehk=spWop3wYdF6f1eMhoZClaOok4oE0PAvQt6XjcggPfHQ%3d&risl=&pid=ImgRaw&r=0" alt="imagen de la manzana apple" />
        <nav>
            <ul>
                <li>iPhone</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>Watch</li>
                <li>AirPods</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBarr