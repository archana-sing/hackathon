import React from 'react';
import styles from '../../styles/SkillCards.module.css'

const HTML = () => {
    return (
        <div className={styles.htmlBG}>
            <div className={styles.cardDiv}>
                <p className={styles.skill+" "+styles.white}>HTML</p>
                <p className={styles.tagline+" "+styles.white}>The language for building web pages</p>
                <button className={styles.learnBtn}>Learn HTML</button>
                <button className={styles.learnBtn}>HTML Reference</button>
            </div>
            <div className={styles.quizDiv}>
                <div className={styles.imgcard}>
                    <img className={styles.image} src="html.svg" alt="HTML"/>   
                    <button className={styles.quizBtn}>Take Quiz</button>
                </div>
            </div>
        </div>
    )
}

export {HTML}