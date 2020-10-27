import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import '../styles/main.css';
import pushData from './api/pushData';
import getData from './api/getData'

const PersonalDetail = (props)=>{
    
    const loggedIn = sessionStorage.getItem('logged_in');
    const [firstName, setFirstName] = useState();
    const [middleName, setMiddleName] = useState();
    const [lastName, setLastName] = useState();
    const [gender, setGender] = useState();
    const [dob, setDob] = useState(new Date());
    const [maritalStatus, setMaritalStatus] = useState();
    const [nationality, setNationality] = useState();
  
    useEffect(()=>{
        getData('details')
        .then(response =>{
            if(response.status === 200){
                const data = response.data[0];
                console.log(data)
                setFirstName(data.first_name);
                setMiddleName(data.middle_name);
                setLastName(data.last_name);
                setGender(data.gender);
                setDob(data.dob);
                setMaritalStatus(data.marital_status);
                setNationality(data.nationality)

            }
        })  
    }, [])

   

    if(loggedIn){
        return (
            <div style={{
                marginLeft: props.marginLeft
            }}>
                <div className='personalDetail'>
                    <form action="" onSubmit={(e) => {
                        e.preventDefault();
                        pushData({
                            cat: 'details',
                            data:{
                                first_name:firstName,
                                last_name:lastName,
                                middle_name:middleName,
                                dob,
                                gender,
                                marital_status:maritalStatus,
                                nationality
                            }
                        }).then( status =>{
                            if(status === 200){
                                //alert updated;
                                alert('updated')
                            }
                        })
                        //submit data for an update;
                    }}>
                        <h4>First Name</h4>
                        <input type="text" placeholder='John' defaultValue={firstName} onChange={(e) => {
                            setFirstName(e.target.value)
                        }} />

                        <h4>Middle Name</h4>

                        <input type="text" placeholder="E'L" defaultValue={middleName} onChange={(e) => {
                            setMiddleName(e.target.value)
                        }} />

                        <h4>Last Name</h4>

                        <input type="text" placeholder='Doe' defaultValue={lastName} onChange={(e) => {
                            setLastName(e.target.value)
                        }} />
                        <div className="gender">
                            <h4>Gender</h4>
                    Male <input name='gender' type="radio" checked={gender === 'male' ? true : false} style={{
                                marginLeft: 5,
                                marginRight: 20
                            }} onChange={(e) => {
                                if (e.target.value === 'on') {
                                    setGender('male')
                                }
                            }} />
                    Female <input name='gender' type="radio" checked={gender === 'female' ? true : false} style={{
                                marginLeft: 5
                            }} onChange={(e) => {
                                if (e.target.value === 'on') {
                                    setGender('female')
                                }
                            }} />
                        </div>
                        <h4>Date of Birth</h4>
                        <input type="date" value = {dob} onChange={(e) => {
                            setDob(e.target.value)
                        }} />
                        <div className="status">
                            <h4>Marital Status</h4>
                    Single <input name='status' type="radio" checked = {maritalStatus === 'single' ? true : false} style={{
                                marginLeft: 5,
                                marginRight: 20
                            }} onChange={(e) => {
                                if (e.target.value === 'on') {
                                    setMaritalStatus('single')
                                }
                            }} />
                    Married <input name='status' type="radio" checked={maritalStatus === 'married' ? true : false} style={{
                                marginLeft: 5
                            }} onChange={(e) => {
                                console.log(e.target.value)
                                if (e.target.value === 'on') {
                                    setMaritalStatus('married')
                                }
                            }} />
                        </div>
                        <h4>Nationality</h4>
                        <input type="text" placeholder='Nigeria' defaultValue={nationality} onChange={(e) => {
                            setNationality(e.target.value)
                        }} />
                        <button type='submit'>Update</button>
                    </form>
                </div>
            </div>
        )
    }else{return <Redirect to = '/login'/>}
}

export default PersonalDetail