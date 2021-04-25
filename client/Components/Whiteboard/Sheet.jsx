import React, { useEffect } from 'react';
import styles from '../../styles/Whiteboard.module.css';
// import io, { Socket } from 'socket.io-client';
// import imageB from ''

class Sheet extends React.Component {

    // timeout;
    // image;

    // socket = io.connect("http://localhost:3001")

    constructor(props) {
        super(props)

        // this.socket.on("mouse", function (drawingData){
        //     let image = document.createElement("img")
        //     let canvas = document.querySelector("#board");
        //     let ctx = canvas.getContext('2d');
        //     image.onload = function() {
        //         ctx.drawImage(image, 0, 0);
        //     };
        //     image.src = drawingData
        // })
    }

    componentDidMount() {
        this.draw();
    }

    draw (){
        var canvas = document.querySelector('#board');
        var ctx = canvas.getContext('2d');
        
        var sketch = document.querySelector('#sketch');
        var sketch_style = getComputedStyle(sketch);
        canvas.width = parseInt(sketch_style.getPropertyValue('width'));
        canvas.height = parseInt(sketch_style.getPropertyValue('height'));
        
        var mouse = {x: 0, y: 0};
        var last_mouse = {x: 0, y: 0};
        
        /* Mouse Capturing Work */
        canvas.addEventListener('mousemove', function(e) {
            last_mouse.x = mouse.x;
            last_mouse.y = mouse.y;
            
            mouse.x = e.pageX - this.offsetLeft;
            mouse.y = e.pageY - this.offsetTop;
        }, false);
        
        
        /* Drawing on Paint App */
        ctx.lineWidth = 5;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'blue';
        
        canvas.addEventListener('mousedown', function(e) {
            canvas.addEventListener('mousemove', onPaint, false);
        }, false);
    
        canvas.addEventListener('mouseup', function() {
            canvas.removeEventListener('mousemove', onPaint, false);
        }, false);
    
        // var root = this;
        var onPaint = function() {
            ctx.beginPath();
            ctx.moveTo(last_mouse.x, last_mouse.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.closePath();
            ctx.stroke();

            // console.log("Sending: "+mouse.x+" , "+mouse.y);
            // let data = canvas.toDataURL('image/jpeg', 1.0)
            // root.socket.emit("mouse", data)
        };
    
    }

    render() {
        return (
            <div className={styles.sketch} id="sketch">
                <canvas className={styles.board} id="board">
                    Canvas
                </canvas>
            </div>
        )
    }
}

export {Sheet}