import Phaser from  'phaser';
//import tiles from '../assets/map/spritesheet.png';
//import map from '../assets/map/map.json';

//const RPG_assets = require('../assets/RPG_assets.png');
//const tiles = require('../assets/map/spritesheet.png');
//const map = require('../assets/map/map.json');

export default class PreloadScene extends Phaser.Scene{
  constructor(){
    super({
      key: 'PreloadScene',
    });
    console.log("Preload Scene");
  }

  preload(){
      this.load.spritesheet('player', '/assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });

      //get map from some place
      this.load.image('tiles', '/assets/map/spritesheet.png' );
      this.load.tilemapTiledJSON('map', '/assets/map/map.json');
      this.load.image('instructions', '/assets/TyprantInstructions.png');
    }

    create(){
      var style = {font:"12px Arial", fill:"#ffffff"};
      this.add.text(120,10,'Hello',style);
      this.scene.start('MenuScene');
    }
};
