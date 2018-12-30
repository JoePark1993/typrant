import Phaser from  'phaser';

export default class InstructionScene extends Phaser.Scene{
  constructor(){
    super({
      key: 'InstructionScene',
    });
    console.log("Instruction Scene");
  }

  create(){
    this.add.image(180,120,'instructions');
    var backTxt = this.add.text(10,10, 'Back');
    backTxt.setInteractive();
    backTxt.on(
      'pointerdown',
      function()
      {
        this.scene.start('MenuScene');
      },
      this
    );
  }
};
