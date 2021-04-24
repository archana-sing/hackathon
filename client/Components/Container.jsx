import React from 'react';
import styles from '../styles/Whiteboard.module.css';
import { Board } from './Board';

const Container = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.color__picker}>
                    
                    <input type="color"/>

                    <div className={styles.board__container}>
                        <Board></Board>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Container}