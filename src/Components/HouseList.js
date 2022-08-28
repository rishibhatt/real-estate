import React, { useEffect, useState } from 'react'
import './HouseList.css'
import House from '../Media/House.jpg'
import { async } from '@firebase/util';
import HouseService from '../Services/HouseService';
import { doc } from 'firebase/firestore';
import { FaBath, FaBed, FaBuyNLarge, FaMapSigns } from 'react-icons/fa'
import { BiMap } from 'react-icons/bi'
import { AiOutlineStar } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';

function HouseList() {

    const [search, setSearch] = useState("");
    const [houses, setHouses] = useState([]);
    const [value, setValue] = useState("--City--");
 

    useEffect(() => {
        getHouses();
    }, []);
    const getHouses = async () => {
        const data = await HouseService.getAllHouses();
        console.log(data.docs);
        setHouses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const searchHouse = (e) => {
        e.preventDefault();
        setHouses(houses.filter((houses) =>
            houses.city.toLowerCase().includes(search.toLowerCase())
        ))
        console.log(houses);
    }

    

   const handleEdit = async (id) => {
    console.log(id);
   }

    
    function goBack() {
        window.location.reload(false);
    }





    return (

        <>
            <form className='filter-bar' onSubmit={((e) => { searchHouse(e) })}>
                <select  onChange={((e) => { setSearch(e.target.value) })}>
                    <option>--Select--</option>
                    {houses.map((doc) => (
                        <option value={doc.city}>
                            {doc.city}

                        </option>))}
                </select>
                <button>submit</button>
            </form>
            
               


            <button className='refresh' onClick={goBack}>Refresh List</button>
            <form className='search-bar' onSubmit={((e) => { searchHouse(e) })}>
                <input placeholder='search from here...' onChange={((e) => { setSearch(e.target.value) })} />
                <button type='submit'>search</button>
            </form>

            {houses.length == 0 ? (
                <h2>No data found</h2>
            ) : (
                <div className='listing-container'>
                    {houses.map((doc, id) => (

                        <div class="card">
                            <img className='houseimage' src={doc.img} alt="Avatar" />
                            <div class="card-container">
                                <div className='heading-price'>
                                    <h4 className='price'><b> ₹ {doc.price}</b> <span className='light'>/month</span></h4>
                                    <AiOutlineStar style={{ fontSize: "34px", marginRight: "10px", marginTop: "30px", padding: "10px" }} onClick = {() => handleEdit(houses.id)} />
                                    
                                </div>

                                <div className='city-style'>
                                    <BiMap style={{ fontSize: "24px", marginTop: "8px" }} /><h2 className='citystyle'>{doc.city}</h2>
                                </div>

                                <div className='address-style'>
                                    <FaMapSigns style={{ fontSize: "12px", marginTop: "8px", marginLeft: "5px" }} />
                                    <p className='add'>{doc.address}</p>
                                </div>

                                <hr />
                                <ul className='horizontal'>
                                    <li>
                                        <span className='icons'><FaBed /></span> {doc.beds} Beds
                                    </li>
                                    <li>
                                        <FaBath /> {doc.bathroom} Bathrooms
                                    </li>
                                </ul>
                            </div>
                        </div>)

                    )}


                </div>

            )
            }


        </>
    )
}

export default HouseList