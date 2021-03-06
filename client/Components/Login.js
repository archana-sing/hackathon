import React from 'react'
import AuthContext from '../context/authContext';
import Styles from '../styles/Login.module.css'

async function loginUser(credentials) {
    return fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

const Login = () => {
const [token , setToken] = React.useContext(AuthContext)
const [username, setUserName] = React.useState();
  const [password, setPassword] = React.useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
    
  }
    return (
        <>
        <div className = {Styles.container}>
            
            <form onSubmit={handleSubmit} className = {Styles.form}>
                <div className = {Styles.heading}>Please Log In</div>
                <label>
                <p className = {Styles.label}>Username</p>
                <input className = {Styles.input} type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                <p className = {Styles.label}>Password</p>
                <input className = {Styles.input} type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                <button className = {Styles.btn} type="submit">Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login
