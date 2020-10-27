import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import CkEditor from '@ckeditor/ckeditor5-react';
import classic from '@ckeditor/ckeditor5-build-classic';
import pushData from './api/pushData'


const Skills = (props) => {
    const [skillData, setSkillData] = useState()
    const [skillPercent, setPercentage] = useState(50)
    const loggedIn = sessionStorage.getItem('logged_in');

    if (loggedIn) {
        return (
            <div className='skills' style={{
                marginLeft: props.marginLeft
            }}>
                <div>
                    <h4>Skill</h4>
                    <CkEditor
                        editor={classic}
                        data = {skillData}
                        onChange={(event, editor) => {
                            setSkillData(editor.getData())
                        }}
                    />
                    <h4 className='percentage'>Rate</h4>
                    <input type="number" defaultValue={skillPercent} onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                            e.target.value = 100
                        }
                        setPercentage(e.target.value)
                    }} />
                    <button onClick={() => {
                        //submision
                        const data = {skillData, skillPercent}
                        if(data.skillData.trim() !== '' && data.skillPercent  !== ''){
                            pushData({ cat: 'skills', data })
                                .then(status => {
                                    if (status === 200) {
                                        //do something
                                        setSkillData('');
                                        setPercentage(50)
                                    }
                                })
                        }
                        
                    }}>Add</button>

                </div>

            </div>
        )
    } else {
        return <Redirect to='/login' />
    }
}

export default Skills