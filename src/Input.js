export const direction = {

    up: 0,
    down: 1,
    right: 2,
    left: 3,
}

export default class InputHandler {

    constructor (game) {

        document.addEventListener('keydown', event => {

            switch(event.keyCode) {

                case 32:

                    game.start();
                    break;

                case 27:

                    game.togglePause();
                    break;

                case 38:

                    game.snake.body[0].move(direction.up);
                    break;
                
                case 39:

                    game.snake.body[0].move(direction.right);
                    break;

                case 40:

                    game.snake.body[0].move(direction.down);
                    break;

                case 37:

                    game.snake.body[0].move(direction.left);
                    break;
            }
        })
    }
}
