import Phaser from  'phaser';

export default class MenuScene extends Phaser.Scene{

  constructor(){
    super({
      key: 'MenuScene',
    });
    console.log("Menu Scene");
  }

  create(){
    document.getElementById("promptBox").style.visibility = "hidden";

    var style = { font: "12px Arial", fill: "#ffffff", align: "center" };
    this.add.text(120,10,'Typrant',style);
    var InstructionTxt = this.add.text(120,100,'Instructions',style);
    var AdvanceTxt = this.add.text(120,175,'Play',style);

    AdvanceTxt.setInteractive();
    AdvanceTxt.on(
      'pointerdown',
      function()
      {
        this.scene.start('RoamScene');
        document.getElementById("inputBox").style.visibility = "visible";
      },
      this
    );
    InstructionTxt.setInteractive();
    InstructionTxt.on(
      'pointerdown',
      function()
      {
        this.scene.start('InstructionScene');
      },
      this
    );
  }
};
