import {detectCollision} from "./CollisionDetection.js";

export default class Fruit {

    constructor (game) {

        this.game = game;

        this.reset();
    }

    reset () {

        this.space = {

            x: (this.game.gameSize / 2) - 20,
            y: (this.game.gameSize / 2) - 20,
            s: this.game.box,
        }
    }

    newFruit() {

        let randomX = Math.floor(Math.random() * 30);
        let randomY = Math.floor(Math.random() * 30);

        this.space.x = randomX * this.space.s;
        this.space.y = randomY * this.space.s;

        this.game.snake.body.forEach((object) => {

            if (detectCollision(object.space, this.space)) this.newFruit();
        })
    }

    update () {

        if (detectCollision(this.game.snake.body[0].space, this.space)) {

            this.game.snake.addBody.msg = true;
            this.newFruit();
        }
    }

    draw (ctx) {
        
        ctx.fillStyle = '#f00';
        ctx.fillRect(this.space.x, this.space.y, this.space.s, this.space.s);
    }
}
