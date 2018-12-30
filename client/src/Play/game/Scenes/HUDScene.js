import Phaser from 'phaser';

export default class HUDScene extends Phaser.Scene{
  constructor(){
    super({
      key: 'HUDScene',
    });
    console.log("HUD Scene");
  }

  create(){
    var style = { font: "12px Arial", fill: "#ffffff", align: "center" };
    this.add.text(450,20,"This should be a scoreboard",style);
  }
};
