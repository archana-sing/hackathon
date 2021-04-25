import React from 'react';

import { useRouter } from 'next/router'
import SocketContext from '../../context/socketContext'
import styles from '../../styles/SkillCards.module.css'

const HTML = () => {
    const router = useRouter();
    const socket = React.useContext(SocketContext)
    const room = "HTML";
    const username = "archana"
    const handleClick = (e) => {
        e.preventDefault()
        socket.emit("joinRoom" , {username , room})
        socket.on("message" , message => {
            console.log(message)
        })
        router.push({
            pathname : "/chat",
            state : {username , room}
        })
       
      }
    const learnHandler = ()=>{
        
            router.push({
                pathname : "/htmlstudy",
            })
        
        
    }
    const quizHandler = ()=>{
      router.push({
        pathname : "/quiz",
        })
        
        
        
      }
    return (
        <div className={styles.htmlBG}>
            <div className={styles.cardDiv}>
                <p className={styles.skill+" "+styles.white}>HTML</p>
                <p className={styles.tagline+" "+styles.white}>The language for building web pages</p>
                <button className={styles.learnBtn} onClick = {learnHandler}>Learn HTML</button>
                <button className={styles.learnBtn}onClick = {handleClick}>Discussion</button>
            </div>
            <div className={styles.quizDiv}>
                <div className={styles.imgcard}>
                    <img className={styles.image} src="html.svg" alt="HTML"/>   
                    <button className={styles.quizBtn} onClick = {quizHandler}>Take Quiz</button>
                </div>
            </div>
        </div>
    )
}

export {HTML}