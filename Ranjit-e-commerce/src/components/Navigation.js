import React from 'react'
import { NavLink as Nav} from 'react-router-dom'
import './navbar.css'

export default function Navigation() {
  return (
    <div className="navbar">
      <div className="links">
        <ul>
          <li className='shop'><Nav to='/'>Games Shop</Nav></li>
          <li><Nav to='/cart'><i class="fa-solid fa-cart-shopping"></i></Nav></li>
        </ul>
      </div>
    </div>
  )
}
