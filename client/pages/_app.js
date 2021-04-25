import React from 'react';
import '../styles/globals.css'
import socketIOClient from 'socket.io-client'
import SocketContext from '../context/socketContext';
import AuthContext from '../context/authContext'
const ENDPOINT = 'http://localhost:3001';
const socket = socketIOClient(ENDPOINT)

function MyApp({ Component, pageProps }) {
  const [token , settoken] = React.useState(null);
  const [username , setUserName] = React.useState("archana")
  return (<>
            <SocketContext.Provider value = {socket}>
              <AuthContext.Provider value = {[token , settoken] , [username , setUserName]}>
              <Component {...pageProps} />
              </AuthContext.Provider>
            </SocketContext.Provider>
          </>  )
}

export default MyApp
