import Head from "next/head";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import VideoChat from "../Components/VideoChat";
import style from "../Components/styles/video.module.css";

export default function Home() {
  return <div>
    
    <Navbar></Navbar>
    <div className={style.video__wrap}><VideoChat></VideoChat></div>
    
    <Footer></Footer>
    
  
  </div>;
}
