import Phaser from  'phaser';
import MenuScene from '../Scenes/MenuScene';
import PreloadScene from '../Scenes/PreloadScene';
import InstructionScene from '../Scenes/InstructionScene';

export default{
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'phaser-container',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene:[
    PreloadScene,
    MenuScene,
    InstructionScene,
  ],
};

