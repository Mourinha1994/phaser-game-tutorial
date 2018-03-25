/**
 * Basic game configurations as the resolution screen
 * scene etc...
 */

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload(){

    // in this method, we include the assets
    this.load.image('sky', 'img/sky.png');
    this.load.image('ground', 'img/platform.png');
    this.load.image('star', 'img/star.png');
    this.load.image('bomb', 'img/bomb.png');
    this.load.spritesheet('dude', 'img/dude.png', { frameWidth: 32, frameHeight: 48});
}

function create(){

    // including the assets into the canvas
    this.add.image(400, 300, 'sky');
}

function update(){

}
