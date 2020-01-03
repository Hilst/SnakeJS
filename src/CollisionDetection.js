export function detectCollision (box1, box2) {

    if (box1.x == box2.x &&
        box1.y == box2.y
    ) {

        return true;
    } else {

        return false;
    }
}
