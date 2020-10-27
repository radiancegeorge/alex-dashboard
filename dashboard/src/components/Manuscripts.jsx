import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Ckeditor from '@ckeditor/ckeditor5-react';
import ckType from '@ckeditor/ckeditor5-build-classic';
import pushData from './api/pushData'


const Manuscript = (props) => {
    const loggedIn = sessionStorage.getItem('logged_in');
    const [data, setData] = useState()



    if (loggedIn) {
        return (
            <div className='manuscript' style={{
                marginLeft: props.marginLeft
            }}>
                <div >
                    <h4>Manuscript</h4>
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
                            pushData({ cat: 'manuscript', data })
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

export default Manuscript