import React, { useState, useContext } from 'react';
import "./NavBar.css";
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const NavBar = () => {
  const [menu, setMenu] = useState("shop");
  const [menuOpen, setMenuOpen] = useState(false); // State to handle menu toggle
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li onClick={() => { setMenu("shop"); setMenuOpen(false); }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("men"); setMenuOpen(false); }}>
          <Link to="/mens" style={{ textDecoration: 'none', color: 'black' }}>Men</Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("women"); setMenuOpen(false); }}>
          <Link to="/women" style={{ textDecoration: 'none', color: 'black' }}>Women</Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("kids"); setMenuOpen(false); }}>
          <Link to="/kids" style={{ textDecoration: 'none', color: 'black' }}>Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default NavBar;
