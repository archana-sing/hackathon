import '../styles/globals.css'
import socketIOClient from 'socket.io-client'
import SocketContext from '../context/socketContext';
const ENDPOINT = 'http://localhost:3001';
const socket = socketIOClient(ENDPOINT)

function MyApp({ Component, pageProps }) {

  return (<>
            <SocketContext.Provider value = {socket}>
            <Component {...pageProps} />
            </SocketContext.Provider>
          </>  )
}

export default MyApp
