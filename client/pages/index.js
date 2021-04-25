import React from 'react'
import Chathome from '../Components/Chathome'
import { Container } from '../Components/Container'
import HomePage from '../Components/Homepage'

import AuthContext from '../context/authContext'
import VideoChat from "../Components/VideoChat";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import style from "../Components/styles/video.module.css";
import Head from "next/head";







const index = () => {
  const [token , settoken] = React.useContext(AuthContext);
  
  return (
    <div>
     {/* <Container/> */}
     {/* <Chathome/> */}
     <HomePage/>
     <Navbar></Navbar>
    <div className={style.video__wrap}><VideoChat></VideoChat></div>
    
    <Footer></Footer>
    </div>
  )
}

export default index

