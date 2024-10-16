// import { Boot } from './scenes/Boot';
// import { GameOver } from './scenes/GameOver';
import { Game as MainGame } from './scenes/Game';
// import { MainMenu } from './scenes/MainMenu';
import { Game } from 'phaser';
// import { Preloader } from './scenes/Preloader';

import { EndScene } from './scenes/EndScene';

const SCENE_WIDTH = 800;
const SCENE_HEIGHT = 600;


//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
// const config: Phaser.Types.Core.GameConfig = {
//     type: AUTO,
//     width: 1024,
//     height: 768,
//     parent: 'game-container',
//     backgroundColor: '#028af8',
//     scene: [
//         Boot,
//         Preloader,
//         MainMenu,
//         MainGame,
//         GameOver
//     ]
// };

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
