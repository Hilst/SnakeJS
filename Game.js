import InputHandler from "./Input.js";
import Snake from "./Snake.js";
import Fruit from "./Fruit.js";

const GAMESTATE = {

    MENU: 0,
    RUNNING: 1,
    PAUSED: 2,
    GAMEOVER: 3,
}

export default class Game {

    constructor (gameSize) {
        
        this.gameSize = gameSize;
        this.box = 20;
        
        this.snake = new Snake(this);
        this.fruit = new Fruit(this);
        this.gameObjects = [this.fruit, this.snake];
        
        this.reset();
    
        new InputHandler(this);
    }

    start () {

        if (this.gameState !== GAMESTATE.MENU &&
            this.gameState !== GAMESTATE.GAMEOVER) return;

        if (this.gameState === GAMESTATE.GAMEOVER) {

            this.reset();
        } else {
            
            this.gameState = GAMESTATE.RUNNING;
        }
    }

    reset () {

        this.gameState = GAMESTATE.MENU;
        this.endGame = false;
        this.points = 0;
        this.snake.reset()
        this.fruit.reset()
    }

    togglePause () {

        if (this.gameState === GAMESTATE.PAUSED) this.gameState = GAMESTATE.RUNNING;
        else this.gameState = GAMESTATE.PAUSED;
    }

    update () {

        if (this.endGame) this.gameState = GAMESTATE.GAMEOVER;

        if (this.gameState === GAMESTATE.MENU ||
            this.gameState === GAMESTATE.PAUSED ||
            this.gameState === GAMESTATE.GAMEOVER
            ) {
            
            return;
        }

        this.gameObjects.forEach((object) => object.update());
    }

    draw (ctx) {
                
        if (this.gameState === GAMESTATE.MENU) {

            ctx.rect(0, 0, this.gameSize, this.gameSize);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Press SPACEBAR to start", this.gameSize / 2, this.gameSize / 2);
            return;
        }

        if (this.gameState === GAMESTATE.PAUSED) {
            
            ctx.rect(0, 0, this.gameSize, this.gameSize);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("PAUSED", this.gameSize / 2, this.gameSize / 2);
            return;
        }

        if (this.gameState === GAMESTATE.GAMEOVER) {
            
            ctx.rect(0, 0, this.gameSize, this.gameSize);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("GAME OVER", this.gameSize / 2, this.gameSize / 2 - 20);
            ctx.fillText(`${this.snake.body.length - 1} points`, this.gameSize / 2, this.gameSize / 2 + 20);
            return;

        }

        this.gameObjects.forEach((object) => object.draw(ctx));

    }

    setEndGame () {

        this.endGame = true;
    }
}