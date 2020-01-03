import Game from "./Game.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAMESIZE = canvas.width;

let game = new Game(GAMESIZE);

setInterval(gameLoop, 100)

function gameLoop () {

    ctx.clearRect(0, 0, GAMESIZE, GAMESIZE);

    game.update();
    game.draw(ctx);
}
