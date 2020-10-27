import React, {useState} from 'react';
import '../../styles/header.css';

const EnterPassword = ()=>{
    const [passwordStyle, setPasswordStyle] = useState({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    });
    const [data, setData] = useState()
    return(
        <div style = {passwordStyle} className = 'enterPass'>
            <form action="" style = {{
                width: 400
            }} onSubmit = {(e)=>{
                e.preventDefault()
                //post request using password

                //demo here
                sessionStorage.setItem('logged_in', true);
                window.location.href = '/'
            }}>
                <input type="Password" placeholder = 'Password..' style={{
                    padding: '1rem 1rem',
                    fontSize: '18px',
                    width: '100%',
                    border: 'none',
                    borderBottom: '1px solid #1c2c58',
                    marginBottom: '1rem'
                }} onChange = {(e)=>{
                    setData(e.target.value)
                }}/>
                <button type = 'submit' style = {{
                    width: '100%',
                    display: 'block',
                    padding: '1rem',
                    marginTop: '1rem',
                    cursor: 'pointer',
                    border: 'transparent',
                    backgroundColor: '#415939',
                    color: 'white',
                    fontSize: '18px'
                }}> Login </button>
                {data}
            </form>
        </div>
    )
}
export default EnterPassword