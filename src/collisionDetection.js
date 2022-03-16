export function detectCollision1(ball, paddle){
    let rightSideOfBall = ball.position.x + ball.size;
    let centerOfBall = ball.position.y + ball.size / 2;

    let topOfPaddle = paddle.position.y;
    let bottomOfPaddle = paddle.position.y + paddle.height;

    if(rightSideOfBall > paddle.position.x &&
        rightSideOfBall < paddle.position.x + paddle.width &&
        centerOfBall >= topOfPaddle &&
        centerOfBall <= bottomOfPaddle){
        return true;
    } else {
        return false;
    }

}

export function detectCollision2(ball, paddle){
    let leftSideOfBall = ball.position.x;
    let centerOfBall = ball.position.y + ball.size / 2;

    let topOfPaddle = paddle.position.y;
    let bottomOfPaddle = paddle.position.y + paddle.height;

    if(leftSideOfBall < paddle.position.x +paddle.width &&
        leftSideOfBall > paddle.position.x &&
        centerOfBall >= topOfPaddle &&
        centerOfBall <= bottomOfPaddle){
        return true;
    } else {
        return false;
    }

}