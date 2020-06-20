import React from 'react';
import './Header.css';
import {
    Link
  } from "react-router-dom";


 const navs = [
     {path:'/posts', 
     name:'Posts Page'},

     {path:'/users', 
     name:'Users Page'}
 ] ;
const Header = () => (
    <div className='menu-items'>
        <nav className='items'>
           <ul className=''>
           {navs.map( nav => (
            <li className= 'link' key={nav.name}>
            <Link to={nav.path}>{nav.name}</Link>
            </li>  
           ))}
           </ul>
        </nav>
    <button className='btn'>Add</button>
    </div>
   
);
export default Header;