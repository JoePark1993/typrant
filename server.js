const express = require('express');
const http = require('http');
const socketIO = require( 'socket.io');
const port = /*process.env.PORT */5000;

const app = express() ;
const server = http.createServer(app);
const io = socketIO(server);

var players = {};

io.on('connection', function(socket){

  console.log('a user connected');

  players[socket.id]={
    x: Math.floor(Math.random() * 420 ) + 40,
    y: Math.floor(Math.random() * 420 ) + 40,
    playerId: socket.id,
    mass: 50,
    inBattle: false,
    };

  //send list of players to new player
  socket.emit('currentPlayers',players);
  //update current players with new player
  socket.broadcast.emit( 'newPlayer' , players[socket.id]);


  //handle if a user leaves the game
  socket.on('disconnect', function(){
    console.log('user disconnect');
    delete players[socket.id];
    io.emit('disconnect',socket.id);

  });

  socket.on('playerMovement', function( movementData){
    players[socket.id].x=movementData.x;
    players[socket.id].y=movementData.y;
    socket.broadcast.emit('playerMoved',players[socket.id]);
  });

  socket.on('p2pHit', function( playerId , otherPlayerId ){
    players[playerId].inBattle = true;
    players[otherPlayerId].inBattle = true;
    socket.broadcast.emit('playerBattle',players[socket.id]);
    //change to io.emit
    socket.broadcast.emit('playerBattle',players[otherPlayerId]);
    socket.broadcast.to(otherPlayerId).emit('p2pBattle', playerId );
    socket.emit( 'p2pBattle', otherPlayerId);
  });

  socket.on('typeSceneEnd', function( playerId , otherPlayerId ){
    socket.broadcast.to(otherPlayerId).emit('lose' );
    players[playerId].inBattle = false;
    players[otherPlayerId].inBattle = false;
    socket.broadcast.emit('playerBattle',players[socket.id]);
    io.emit('playerBattle',players[otherPlayerId]);

    //include mass after
    socket.broadcast.to(otherPlayerId).emit('battleOutCome' );
    socket.emit( 'battleOutCome' );

    let loserMass = players[otherPlayerId].mass;
    let winnerMass = players[playerId].mass;
    if( loserMass > winnerMass ){
      loserMass -= winnerMass;
      winnerMass += winnerMass;
    }
    else{
      winnerMass += loserMass ;
      loserMass = 1;
    }

    players[playerId].mass= winnerMass;
    players[otherPlayerId].mass= loserMass;

    io.emit('massUpdate', players[playerId] );
    io.emit('massUpdate', players[otherPlayerId] );
  });


});



server.listen( port , function () {
    console.log(`Listening on ${port}`);
});

//server.listen( process.env.PORT,process.env.IP);
