import React from 'react';
import '../styles/globals.css'
import socketIOClient from 'socket.io-client'
import SocketContext from '../context/socketContext';
import AuthContext from '../context/authContext'
const ENDPOINT = 'http://localhost:3001';
const socket = socketIOClient(ENDPOINT)

function MyApp({ Component, pageProps }) {
  const [token , setToken] = React.useState(null);

  return (<>
            <SocketContext.Provider value = {socket}>
              <AuthContext.Provider value = {[token , setToken]}>
              <Component {...pageProps} />
              </AuthContext.Provider>
            </SocketContext.Provider>
          </>  )
}

export default MyApp
