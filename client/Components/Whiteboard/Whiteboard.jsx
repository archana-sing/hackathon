import React, {useEffect} from 'react'; 
import styles from "../../styles/BoardStyle.module.css"

const Whiteboard = () => {
    let selected_color = 'red';
    const selectColor = (color) => {
       
        selected_color = color;
    }
    useEffect(() => {
        /* Initialise variables */
        let isDrawing = false;
        let x = 0;
        let y = 0;
    
        /* Get canvas and context */
        const canvas = document.getElementById('sheet');
        var context = canvas.getContext('2d');
    
        /* Add the event listeners for mousedown, mousemove, and mouseup */
        canvas.addEventListener('mousedown', e => {
            /* Drawing begins */
            x = e.offsetX;
            y = e.offsetY;
            isDrawing = true;
        });
        
        canvas.addEventListener('mousemove', e => {
            /* Drawing continues */
            if (isDrawing === true) {
                drawLine(context, x, y, e.offsetX, e.offsetY);
                x = e.offsetX;
                y = e.offsetY;
            }
        });
        
        window.addEventListener('mouseup', e => {
            /* Drawing ends */
            if (isDrawing === true) {
                drawLine(context, x, y, e.offsetX, e.offsetY);
                x = 0;
                y = 0;
                isDrawing = false;
            }
        });
    
        /* Initialise socket */
        // var socket = io();
    
        /* Receiving Updates from server */
        // socket.on('update_canvas',function(data){
        //     let {x1,y1,x2,y2,color} = JSON.parse(data);
        //     drawLine(context,x1,y1,x2,y2,color,true);
        // });
    
        /* Function to Draw line from (x1,y1) to (x2,y2) */
        function drawLine(context, x1, y1, x2, y2,color = selected_color,from_server = false) {
    
            /* Send updates to server (not re-emiting those received from server) */
            // if(!from_server)
            //     socket.emit('update_canvas',JSON.stringify({x1,y1,x2,y2,color}));
            
            /* Draw line with color, stroke etc.. */
            context.beginPath();
            context.strokeStyle = color;
            context.lineWidth = 5;
            context.lineCap = 'round'
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.stroke();
            context.closePath();
            }
      }, []);
    return (
        <>
            <div className={styles.flex_container}>
                <div>
                <button className={styles.round_button+" "+styles.red+" "+styles.selected} onclick="selectColor('red')"></button>
                </div>
                <div>
                <button className={styles.round_button+" "+styles.green} onclick={selectColor('green')}></button>
                </div>
                <div>
                <button className={styles.round_button+" "+styles.orange} onclick={selectColor('orange')}></button>
                </div>
                <div>
                <button className={styles.round_button+" "+styles.blue} onclick={selectColor('blue')}></button>
            </div>
            </div>
            <div className={styles.flex_container}>
                <div>
                    <canvas id="sheet" width="1000" height="500"></canvas>
                </div>
            </div>
        </>
    )
}

export {Whiteboard}