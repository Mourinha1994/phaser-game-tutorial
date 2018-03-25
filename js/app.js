/**
 * Basic game configurations as the resolution screen
 * scene etc...
 */

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300},
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// global variables
var platforms;
var player;
var cursors;

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

    // creating the ground and platforms in the create method
    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    // creating the player
    player = this.physics.add.sprite(100, 450, 'dude');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.physics.add.collider(platforms, player);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{ key: 'dude', frame: 4}],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8}),
        frameRate: 10,
        repeat: -1
    });
}

function update(){

    // creating the player commands
    cursors = this.input.keyboard.createCursorKeys();

    // left move
    if(cursors.left.isDown){
        player.setVelocityX(-100);
        player.anims.play('left', true);
    }

    // right move
    else if(cursors.right.isDown){
        player.setVelocityX(100);
        player.anims.play('right', true);
    }

    // if either left or right key is pressed, player is stopped
    else{
        player.setVelocityX(0);
        player.anims.play('turn');
    }

    // jump move
    if(cursors.up.isDown && player.body.touching.down){
        player.setVelocityY(-330);
    }
}
