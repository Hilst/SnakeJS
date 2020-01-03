import {direction} from "./Input.js";

export default class Body {

    constructor (game, space, next) {

        this.game = game;
        
        this.space = {

            x: space.x,
            y: space.y,
            s: space.s,
        };
        this.speed = {

            x: 0,
            y: 0,
        };
        this.number = 0;
        this.next = next;
        if (this.next !== null) {

            this.number = this.next.number + 1;
        }
        this.old = {

            x: 0,
            y: 0,
        }
    }

    update () {

        this.old.x = this.space.x;
        this.old.y = this.space.y;
        
        if (this.next === null) {
            
            this.space.x += this.speed.x * this.space.s;
            this.space.y += this.speed.y * this.space.s;
        } else {

            this.space.x = this.next.old.x;
            this.space.y = this.next.old.y;
        }
    }

    move (type) {

        if (this.next !== null) return;
        
        if (type === direction.up && this.speed.y != 1) {

            this.speed.x = 0;
            this.speed.y = -1;
        }
        if (type === direction.down && this.speed.y != -1) {

            this.speed.x = 0;
            this.speed.y = 1;
        }
        if (type === direction.right && this.speed.x != -1) {

            this.speed.x = 1;
            this.speed.y = 0;
        }
        if (type === direction.left && this.speed.x != 1) {

            this.speed.x = -1;
            this.speed.y = 0;
        }
    }

    draw (ctx) {

        if (this.number % 2 == 0) ctx.fillStyle = '#0a0';
        else ctx.fillStyle = '#d8fa00';
        ctx.fillRect(this.space.x, this.space.y, this.space.s, this.space.s);
    }
}
