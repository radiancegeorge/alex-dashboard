import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import CkEditor from '@ckeditor/ckeditor5-react';
import classic from '@ckeditor/ckeditor5-build-classic';
import pushData from './api/pushData'


const Languages = (props)=>{
    const [languagesData, setLanguagesData] = useState()
    const [languagePercentage, setPercentage] = useState(0)
    const loggedIn = sessionStorage.getItem('logged_in');
 
    if(loggedIn){
        return (
            <div className='languages' style={{
                marginLeft: props.marginLeft
            }}>
                <div>
                    <h4>Language</h4>
                    <CkEditor
                    data = {languagesData}
                        editor={classic}
                        onChange={(event, editor) => {
                            setLanguagesData(editor.getData())
                        }}
                    />
                    <h4 className='percentage'>Rate</h4>
                    <input type="number" defaultValue={languagePercentage} onChange={(e) => {
                        if(Number(e.target.value) > 100){
                            e.target.value = 100
                        }
                        setPercentage(e.target.value)
                    }} />
                    <button onClick={() => {
                        //submision
                    if(languagesData.trim() !== ''){
                        pushData({ cat: 'languages', data: { languagesData, languagePercentage } })
                            .then(status => {
                                if (status === 200) {
                                    //clear input;
                                    setLanguagesData('');
                                    setPercentage(0)
                                }
                            })
                    }else{
                        //report an empty input
                    }
                    }}>Add</button>

                </div>
                
            </div>
        )
    }else{
        return <Redirect to='/login' />
    }
}

export default Languages