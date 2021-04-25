import React from 'react';
import styles from '../../styles/SkillCards.module.css'

const CSS = () => {
    return (
        <div className={styles.cssBG}>
            <div className={styles.cardDiv}>
                <p className={styles.skill+" "+styles.black}>CSS</p>
                <p className={styles.tagline+" "+styles.black}>The language for styling web pages</p>
                <button className={styles.learnBtn}>Learn CSS</button>
                <button className={styles.learnBtn}>CSS Reference</button>
            </div>
            <div className={styles.quizDiv}>
                <div className={styles.imgcard}>
                    <img className={styles.image} src="css.svg" alt="HTML"/>   
                    <button className={styles.quizBtn}>Take Quiz</button>
                </div>
            </div>
        </div>
    )
}

export {CSS}