import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/main.css';
import {FiHome, FiMail, FiPhone} from 'react-icons/all';
import pushData from './api/pushData';

const Contact = (props) => {

    const loggedIn = sessionStorage.getItem('logged_in');
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [address, setAddress] = useState();
    const [stateCountry, setStateCountry] = useState();
    





    if (loggedIn) {
        return (
            <div style={{
                marginLeft: props.marginLeft
            }}>
                <div className='personalDetail'>
                    <form action="" onSubmit={(e) => {
                        e.preventDefault();
                        pushData({
                            cat: 'contact', data:{
                                email: email,
                                phone_number: phoneNumber,
                                address: address,
                                state_country: stateCountry
                            }
                        }).then(status =>{
                            if(status === 200){
                                alert('Updated')
                            }
                        })
                        //submit data for an update;
                    }}>
                        <h4>E-mail <FiMail size ='20'/> </h4>
                        <input type="text" placeholder='....@mail.com' onChange={(e) => {
                            setEmail(e.target.value)
                        }} />

                        <h4>Phone Number <FiPhone size='20' /> </h4>

                        <input type="number" placeholder="+234 000 000 0000" onChange={(e) => {
                            setPhoneNumber(e.target.value)
                        }} />

                        <h4>Address <FiHome size='20' /></h4>

                        <input type="text" placeholder='where do you live?' onChange={(e) => {
                            setAddress(e.target.value)
                        }} />
                        
                        
                        <h4>State, Country</h4>
                        <input type="text" placeholder='Imo, Nigeria' onChange={(e) => {
                            setStateCountry(e.target.value)
                        }} />
                        <button type='submit'>Update</button>
                    </form>
                </div>
            </div>
        )
    } else { return <Redirect to='/login' /> }
}

export default Contact