import React, { useEffect, useState } from 'react'
import HouseService from '../Services/HouseService';
import { FaBath, FaBed, FaBuyNLarge, FaMapSigns } from 'react-icons/fa'
import { BiMap } from 'react-icons/bi'
import { AiOutlineStar } from 'react-icons/ai'
import './Favorite.css'
import { Link } from 'react-router-dom';
function Favourite() {

    const [houses, setHouses] = useState([]);

    useEffect(() => {
        getHouses();
    }, []);
    const getHouses = async () => {
        const data = await HouseService.getFavHouse();
        console.log(data.docs);
        setHouses(data.docs.map((doc) => ({ ...doc.data(), id: doc })));
    };
    return (

        <>

        <h2 className='headFav'>Your Favorites</h2>


    {houses.map((doc,index) => (
        <div className='favCard-container'>
        <div className='favCard'>
            <img className='favImage' src={doc.img} />

            <div className='favText'>

                <input value={doc.price} disabled /><br/>
                <input value={doc.city} disabled /><br/>
                <input value={doc.beds} disabled /><br/>
                <input value={doc.address} disabled /><br/>
                <input value={doc.property} disabled /><br/>

            </div>
        </div>
    </div>
    ))}
        <Link className="backHome" to='/'>Back To Home</Link>

        </>
    )

            }


    export default Favourite