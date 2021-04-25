import React from "react";
import { Board } from "../Components/Whiteboard/Board";
import HomePage from "../Components/Homepage";
import Login from "../Components/Login";
import AuthContext from "../context/authContext";
import VideoChat from "../Components/VideoChat";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import style from "../Components/styles/video.module.css";
import Head from "next/head";

import { Whiteboard } from "../Components/Whiteboard/Whiteboard";

const index = () => {
  const [token, settoken] = React.useContext(AuthContext);
  // if(token == null){
  //   return(
  //     <Login/>
  //     )
  // }
  return (
    <div>
      <Navbar></Navbar>
      
      {/* <Chathome /> */}
      <HomePage />
      <div className={style.video__wrap}>
        <VideoChat></VideoChat>
        <Whiteboard />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default index;
