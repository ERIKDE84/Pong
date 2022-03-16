export function deflection(ball, paddle){
    let centerPaddle = paddle.position.y + paddle.height / 2;
    let centerBall = ball.position.y + ball.size / 2;
    let distance = centerPaddle - centerBall;
    let alpha = Math.atan(paddle.width / distance);
    let y = Math.cos(alpha) * ball.speed.totalSpeed;
    ball.speed.y = Math.sqrt(ball.speed.totalSpeed**2 - y**2);
    
    if(centerPaddle - centerBall > 0){
        ball.speed.y = -y;
    } else {
        ball.speed.y = y;
    }
}