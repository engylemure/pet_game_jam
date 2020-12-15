import * as Phaser from 'phaser'

import HelloWorldScene from './scenes/hello_world_scene'

declare global {
    interface Window {
        game: Phaser.Game
    }
}

const config: GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
        },
    },
    scene: [HelloWorldScene],
}

const game = new Phaser.Game(config)

window.game = game
