import React from 'react'
import AuthContext from '../context/authContext';

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

const login = () => {
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
        
        <div>
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                <p>Username</p>
                <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default login