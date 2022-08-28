import React, { useEffect, useState } from 'react'
import HouseService from '../Services/HouseService';
import Navbar from './Navbar';
import { db, storage } from '../Firebase/firebase-config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import './AddHouse.css'
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from './Footer';
function AddHouse() {

    const initialState = {
        price: null,
        city: "",
        address: "",
        beds: null,
        bathroom: null,
        property: "",
        favorite: "false",

    };




    const [progress, setProgress] = useState(0);
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const [data, setData] = useState(initialState);
    const { price, property, address, city, beds, bathroom, favorite } = data;
    const [issubmit, setIsSubmit] = useState(false);
    const [errors, setErrors] = useState({});




    const handleSubmit = async (e) => {

        e.preventDefault();
        let errors = validate();
        if (Object.keys(errors).length) return setErrors(errors);
        setIsSubmit(true);
        await addDoc(collection(db, "houses"), {
            ...data,
            timestamp: serverTimestamp()
        });
        navigate("/");
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on("state_changed", (snapshot) => {
                const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(prog);
                switch (snapshot.status) {
                    case "paused":
                        console.log("upload is pause");
                        break;
                    case "running":
                        console.log("running");
                        break;
                    default:
                        break;
                }
            },
                (err) => console.log(err),
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then((downloadUrl) => {
                            setData((prev) => ({ ...prev, img: downloadUrl }))
                        });
                }
            );

        }
        file && uploadFile()
    }, [file]);

    const childProgress = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: '#383b3d',
        borderRadius: 40,
        textAlign: 'right'
    }

    const validate = () => {
        let errors = {};
        if (!price) {
            errors.price = "Price is requires";
        }
        if (!city) {
            errors.city = "City is requires";
        }
        if (!address) {
            errors.address = "Address is requires";
        }
        if (!beds) {
            errors.beds = "Beds is requires";
        }

        if (!bathroom) {
            errors.bathroom = "Bathroom is requires";
        }

        return errors;
    }



    return (
        <>

            <div className='form-container'>

                <h2 className='headAdd'>Add your house</h2>
                <div className='form'>
                    <form onSubmit={handleSubmit}>
                        <label for="price">Price</label>
                        <input type="number" id="price" name="price" value={price} onChange={handleChange} error={errors.price ? { content: errors.price } : null} /><br />
                        <label for="city">City</label>
                        <input type="text" id="city" name="city" value={city} onChange={handleChange} error={errors.city ? { content: errors.city } : null} /><br />
                        <label for="address">Address</label>
                        <input type="text" id="address" name="address" value={address} onChange={handleChange} error={errors.address ? { content: errors.address } : null} /><br />
                        <label for="beds">Beds</label>
                        <input type="number" id="beds" name="beds" value={beds} onChange={handleChange} error={errors.beds ? { content: errors.beds } : null} /><br />

                        <label for="bathroom">Bathrooms</label>
                        <input type="number" id="bathroom" name="bathroom" value={bathroom} onChange={handleChange} error={errors.bathroom ? { content: errors.bathroom } : null} /><br />

                        <label for="favorite">Favorite</label>
                        <input type="string" id="favorite" placeholder="write 'true' to add in favorites.." name="favorite" value={favorite} onChange={handleChange} /><br />

     


                        <label for="property">Property</label>
                        <input type="text" id="property" name="property" value={property} onChange={handleChange} error={errors.property ? { content: errors.property } : null} /><br />
                        <input className='fileup' type="file" onChange={(e) => setFile(e.target.files[0])} /><br />

                        <div className='parentProgress'>
                            <div style={childProgress}>
                                <span style={{color:"white"}}>{`${progress}%`}</span>
                            </div>
                        </div>
                        <input className='submit-form' disabled={progress !== null && progress < 100} type="submit" value="Submit" />
                    </form>

                </div>

            </div>

        </>

    )
}

export default AddHouse