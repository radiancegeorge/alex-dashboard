import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Ckeditor from '@ckeditor/ckeditor5-react';
import ckType from '@ckeditor/ckeditor5-build-classic';
import pushData from './api/pushData';
import getData from './api/getData';


const Reference = (props) => {
    const loggedIn = sessionStorage.getItem('logged_in');
    const [data, setData] = useState()


    useEffect(() => {
        getData('reference')
            .then(response => {
                if (response.status === 200) {
                    const data = response.data[0].data;
                    console.log(data)
                    setData(data)
                }
            })
    }, [])
    if (loggedIn) {
        return (
            <div className='reference' style={{
                marginLeft: props.marginLeft
            }}>
                <div >
                    <h4>Refernce</h4>
                    <Ckeditor
                        editor={ckType}
                        data={data}
                        onChange={(event, editor) => {
                            setData(editor.getData())
                        }}
                    />
                    <button onClick={() => {
                        if (data.trim() !== '') {
                            //sending data to server;
                            pushData({ cat: 'reference', data })
                                .then(status => {
                                    if (status === 200) {
                                        //do something
                                        setData('')
                                    }
                                })
                        }
                    }}>Update</button>
                </div>
            </div>
        )
    } else { return <Redirect to='/login' /> }
}

export default Reference