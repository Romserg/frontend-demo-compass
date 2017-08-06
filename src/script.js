$(window).on('deviceorientation', function (event) {
    var alpha = event.originalEvent.alpha || event.webkitCompassHeading || 0;
    var beta = event.originalEvent.beta;
    var gamma = event.originalEvent.gamma;
    var absolute = event.originalEvent.absolute;
    var direction = angleToDirection(alpha);

    setAngle(alpha, beta);
    displayAngle(alpha);
    setDirection(direction);
})

function setAngle(angle, motionAngle) {
    $('.compass .compass-circle').css({
        transform: 'rotateZ(' + angle + 'deg)'
    })
    $('.compass').css({
        'transform': 'rotate3d(1,0,0,' + (motionAngle * -1) + 'deg)'
    })
}

function setDirection(direction) {
    $('.compass .direction').text(direction)
}

function displayAngle(angle) {
    var integerAngle = parseInt(angle,10);
    $('.compass .angle').text(integerAngle);
}

function angleToDirection(angle) {
    if (angle >= 315 || angle < 45) {
        return 'N' //North
    } else if (angle >= 45 && angle < 135) {
        return 'E' // East
    } else if (angle >= 135 && angle < 225) {
        return 'S' // South
    } else if (angle >= 225 && angle < 315) {
        return 'W' // West
    }
}

setDirection("NE")
displayAngle(90)
setAngle(10);
