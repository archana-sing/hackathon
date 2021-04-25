import React from 'react'
import Chathome from '../Components/Chathome'
import { Container } from '../Components/Container'
import HomePage from '../Components/Homepage'
import Login from '../Components/Login'
import AuthContext from '../context/authContext'
import VideoChat from "../Components/VideoChat";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import style from "../Components/styles/video.module.css";
import Head from "next/head";







const index = () => {
  const [token , settoken] = React.useContext(AuthContext);
  // if(token == null){
  //   return(
  //     <Login/>
  //     )
  // }
  return (
    <div>
      <Navbar></Navbar>
     {/* <Container/> */}
     <Chathome/>
     <HomePage/>
     
    <div className={style.video__wrap}><VideoChat></VideoChat></div>
    
    <Footer></Footer>
    </div>
  )
}

export default index

