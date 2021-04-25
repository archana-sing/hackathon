import React from 'react';
import styles from '../../styles/Whiteboard.module.css';
import { Sheet } from './Sheet';

const Board = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.color__picker}>
                    {/* <input type="color"/> */}
                    <div className={styles.board__container}>
                        <Sheet></Sheet>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Board}