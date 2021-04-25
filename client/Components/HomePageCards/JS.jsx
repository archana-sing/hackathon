import React from 'react';
import styles from '../../styles/SkillCards.module.css'

const JS = () => {
    return (
        <div className={styles.jsBG}>
            <div className={styles.cardDiv}>
                <p className={styles.skill+" "+styles.black}>JavaScript</p>
                <p className={styles.tagline+" "+styles.black}>The language for programming web pages</p>
                <button className={styles.learnBtn}>Learn CSS</button>
                <button className={styles.learnBtn}>JavaScript Reference</button>
            </div>
            <div className={styles.quizDiv}>
                <div className={styles.imgcard}>
                    <img className={styles.image} src="js.svg" alt="JS"/>   
                    <button className={styles.quizBtn}>Take Quiz</button>
                </div>
            </div>
        </div>
    )
}

export {JS}