module.exports = function(io){

 let express = require('express');
 let router = express.Router();

  // store history of updates to redraw for new users
  const history = [];

  io.on('connection',(socket)=>{
    
    // draw all old updates
    for(let item of history)
      socket.emit('update_canvas',item);

    //  Recieving updates from user
    socket.on('update_canvas',function(data){

      // store updates
      history.push(data);

      // send updates to all sockets
      socket.broadcast.emit('update_canvas',data);
    });
  })
  
  return router;
}