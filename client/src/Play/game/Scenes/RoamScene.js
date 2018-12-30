import Phaser from  'phaser';
import socketIOClient from 'socket.io-client';

var playersList=[];
export default class RoamScene extends Phaser.Scene{
  constructor(){
    super({
      key: 'RoamScene',
    });
    console.log("Roam Scene");
  }

  create(){

    this.scene.launch('HUDScene');
    //map things
    var map = this.make.tilemap({key:'map'});
    var tiles = map.addTilesetImage('spritesheet', 'tiles');
    map.createStaticLayer('Grass', tiles, 0, 0);
    var obstacles = map.createStaticLayer('Obstacles', tiles, 0, 0);
    obstacles.setCollisionByExclusion([-1]);

    var self = this;
    this.socket = socketIOClient('http://localhost:5000');
    this.otherPlayers = this.physics.add.group();
    this.player = this.physics.add.sprite( 50 , 50 ,'player', 6);
    //at the beginning

    //camera things
    this.physics.world.bounds.width = map.widthInPixels; //480
    this.physics.world.bounds.height = map.heightInPixels;//480
    this.cameras.main.roundPixels = true;
    this.cameras.main.setBounds(0,0,map.widthInPixels, map.heightInPixels);

    //cursor things
    this.cursors = this.input.keyboard.createCursorKeys();

    //colision things
    this.physics.add.collider(this.player,obstacles);
    this.physics.add.overlap(this.player,this.otherPlayers, this.p2p ,null,this);

    this.socket.on('currentPlayers',function(players){
      Object.keys(players).forEach((id)=>{

        if(players[id].playerId === self.socket.id){
          self.player.setPosition( players[id].x , players[id].y);
          self.player.setCollideWorldBounds(true);
          self.cameras.main.startFollow(self.player);
          self.player.mass = players[id].mass;
          self.player.inBattle = players[id].inBattle;
        }
        else{ //add others
          addOtherPlayers( self, players[id]);
        }
        playersList.push(players[id]);

        self.events.emit('refresh', playersList);
      });
    });

    //durring game player adding
    this.socket.on('newPlayer', (playerInfo)=>{
      addOtherPlayers( self, playerInfo);

      let players = [];
      players[0]=playerInfo;
      self.events.emit('refresh', players);
    });

    //remove players
    this.socket.on('disconnect',(playerId)=>{
      self.otherPlayers.getChildren().forEach(function (otherPlayers) {
        if (playerId === otherPlayers.playerId) {
          otherPlayers.destroy();
        }
      });
    });

    //move players
    this.socket.on('playerMoved', function(playerInfo){
      self.otherPlayers.getChildren().forEach( function(otherPlayer){
        if( playerInfo.playerId === otherPlayer.playerId ){
          otherPlayer.setPosition( playerInfo.x, playerInfo.y);
        }
      });
    });

    //update battle status
    this.socket.on('playerBattle', function(playerInfo){
      self.otherPlayers.getChildren().forEach( function(otherPlayer){
        if( playerInfo.playerId === otherPlayer.playerId ){
          otherPlayer.inBattle = playerInfo.inBattle ;
        }
      });
    });

    //update mass
    this.socket.on('massUpdate', function(playerInfo){
      self.otherPlayers.getChildren().forEach( function(otherPlayer){
        if( playerInfo.playerId === otherPlayer.playerId ){
          otherPlayer.mass= playerInfo.mass;
        }

        let players = [];
        players[0]=playerInfo;
        self.events.emit('refresh', players);

      });
    });

    this.socket.on('refesh',function(playerList){
      self.events.emit('refresh', playerList);
    });
    

    this.socket.on('p2pBattle', function( otherId ){
      self.cameras.main.shake( 300 );
      self.player.inBattle = true;
      self.scene.launch( 'TypeScene' );
      self.otherId = otherId ;
    });

    this.socket.on('lose',function(){
      self.cameras.main.shake( 300 );
      self.player.x = Math.floor(Math.random() * 420 ) + 40;
      self.player.y = Math.floor(Math.random() * 420 ) + 40;
      self.socket.emit('playerMovement',{x:self.player.x,y:self.player.y});
      document.getElementById('tester').innerHTML=" " ;
      document.getElementById("promptBox").style.visibility = "hidden";
      self.scene.stop('TypeScene');
    });

    //include mass
    this.socket.on('battleOutCome',function(){
      self.player.inBattle = false ;
    });

    let battleListener = this.scene.get('TypeScene');
    battleListener.events.on('battleEnd', function(players){
      console.log('battle end');
      self.socket.emit( 'typeSceneEnd' , self.socket.id, self.otherId );
      self.cameras.main.shake( 300 );
      self.player.x = Math.floor(Math.random() * 420 ) + 40;
      self.player.y = Math.floor(Math.random() * 420 ) + 40;
      self.socket.emit('playerMovement',{x:self.player.x,y:self.player.y});
      self.scene.stop( 'TypeScene');

      self.events.emit('closeTypeScene');
    });

  }

  p2p( player , otherPlayer ){
    if( !this.player.inBattle && !otherPlayer.inBattle && otherPlayer.playerId !== this.otherId ){
      console.log( this.player.inBattle);
      console.log( otherPlayer.inBattle);
      this.socket.emit( 'p2pHit', this.socket.id , otherPlayer.playerId);
    }
  }

  update(time, delta){
    if(this.player){

      var x=this.player.x;
      var y=this.player.y;

      if(this.player.oldPosition && (x!==this.player.oldPosition.x || y!==this.player.oldPosition.y)){
        this.socket.emit('playerMovement',{x:this.player.x,y:this.player.y});
      }

      this.player.oldPosition={
        x:this.player.x,
        y:this.player.y,
      };

      this.player.body.setVelocity(0);

      // Horizontal movement
      if (this.cursors.left.isDown){
        this.player.body.setVelocityX(-80);
      }
      else if (this.cursors.right.isDown){
        this.player.body.setVelocityX(80);
      }

      // Vertical movement
      if (this.cursors.up.isDown){
        this.player.body.setVelocityY(-80);
      }
      else if (this.cursors.down.isDown){
        this.player.body.setVelocityY(80);
      }
    }
  }
};

function addOtherPlayers(self, playerInfo){
  const otherPlayer = self.physics.add.sprite( playerInfo.x , playerInfo.y ,'player', 3);
  otherPlayer.playerId = playerInfo.playerId;
  otherPlayer.mass = playerInfo.mass;
  otherPlayer.inBattle = playerInfo.inBattle;
  self.otherPlayers.add(otherPlayer);
}
