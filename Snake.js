import Body from "./Body.js";
import { detectCollision } from "./CollisionDetection.js";

export default class Snake {

    constructor (game) {

        this.game = game;
        this.reset();
    }

    reset () {

        this.body = [];
        this.head = {

            x: this.game.box,
            y: this.game.box,
            s: this.game.box,
        };
        this.body.push(new Body(this.game, this.head, null));
        this.addBody = {

            msg: false,
            ask: false,
            input: {x: 0, y:0, s:this.game.box}, 
        }
    }

    newBody() {

        var place = this.addBody.input;
        var collision = false;
        this.body.forEach((object) => {

            if (!detectCollision(place, object.space)) {

                collision = false;
            }
        })

        if (!collision) {

            this.body.push(new Body(this.game, place, this.body[this.body.length - 1]));
            this.addBody.ask = false;
            this.addBody.msg = false;
        }
    }

    update () {

        if (this.addBody.msg) {

            if (!this.addBody.ask) {

                this.addBody.ask = true;
                this.addBody.input.x = this.body[0].space.x;
                this.addBody.input.y = this.body[0].space.y;
            }

            this.newBody();
        }
        
        this.body.forEach((object) => object.update());
        
        if (this.body[0].space.x < 0 ||
            this.body[0].space.x + this.body[0].space.s > this.game.gameSize ||
            this.body[0].space.y < 0 ||
            this.body[0].space.y + this.body[0].space.s > this.game.gameSize
        ) {

            this.game.setEndGame();
        }

        var collisionBody = false;
        var notHead = this.body.slice(1);
        notHead.forEach((object) => {

            if (detectCollision(object.space, this.body[0].space)) collisionBody = true;
        })

        if (collisionBody) this.game.setEndGame();
        
    }

    draw (ctx) {

        this.body.forEach((object) => object.draw(ctx));
    }
}