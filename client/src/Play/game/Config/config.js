import Phaser from  'phaser';
import MenuScene from '../Scenes/MenuScene';
import PreloadScene from '../Scenes/PreloadScene';
import InstructionScene from '../Scenes/InstructionScene';
import RoamScene from '../Scenes/RoamScene';

export default{
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'phaser-container',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    }
  },
  scene:[
    PreloadScene,
    MenuScene,
    InstructionScene,
    RoamScene,
  ],
};

