import React from 'react';
import styles from '../../styles/SkillCards.module.css'

const SQL = () => {
    return (
        <div className={styles.sqlBG}>
            <div className={styles.cardDiv}>
                <p className={styles.skill+" "+styles.black}>SQL</p>
                <p className={styles.tagline+" "+styles.black}>A language for accessing databases</p>
                <button className={styles.learnBtn}>Learn SQL</button>
                <button className={styles.learnBtn}>SQL Reference</button>
            </div>
            <div className={styles.quizDiv}>
                <div className={styles.imgcard}>
                    <img className={styles.image} src="sql.svg" alt="SQL"/>   
                    <button className={styles.quizBtn}>Take Quiz</button>
                </div>
            </div>
        </div>
    )
}

export {SQL}