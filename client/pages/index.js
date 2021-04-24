import Head from "next/head";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import VideoChat from "../Components/VideoChat";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return <div>
    
    <Navbar></Navbar>
    <VideoChat></VideoChat>
    <Footer></Footer>
    
  
  </div>;
}
