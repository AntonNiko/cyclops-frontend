import { GameScene as MainGame } from './scenes/Game';
import { Game } from 'phaser';
import { EndScene } from './scenes/EndScene';

const SCENE_WIDTH = 800;
const SCENE_HEIGHT = 600;

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: SCENE_WIDTH,
    height: SCENE_HEIGHT,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                 x: 0,
                 y: 300
            }
        }
    },
    scene: [
       MainGame,
       EndScene
    ],
    pixelArt: true,
};


const StartGame = (parent: string) => {

    return new Game({ ...config, parent });

}

export default StartGame;
