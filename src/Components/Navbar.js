import React, { useState } from 'react'
import {HiMenu} from "react-icons/hi";
import {ImCross} from 'react-icons/im'
import { NavLink,Link } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {

    const [toggle, settoggle] = useState('nav-items');
    const [menuBar,setMenuBar] = useState(<HiMenu />);
   
    const toggleBtn = () => {
        if (toggle === 'nav-items') {
            settoggle('nav-items active');
            setMenuBar(<ImCross />);
        }
        else {
            settoggle('nav-items');
            setMenuBar(<HiMenu />);
        }
    }

    return (

        <>
            <div className='nav'>
                <h3 className='brand'>

                    <Link to="/"><img src='https://softr-prod.imgix.net/applications/c894b09d-a577-43c3-ba03-472ba216b6b2/assets/9f0fb6a5-8ca4-4fa2-9678-50b4195afa26.png' /></Link>

                </h3>
                <ul className={toggle}>
                    <li>
                        <NavLink to ='/'>Home</NavLink></li>
                    <li><NavLink to = '/addhouse'>Add House</NavLink></li>
                    <li><NavLink to ='/favourite'>Favourites</NavLink></li>
                    <li><button className='login'>Log in</button></li>
                    <li><button className='signup'>Sign up</button></li>
                </ul>
                <a className='menu' onClick={toggleBtn}>
                    {menuBar}
                </a>



            </div>


        </>
    )
}
