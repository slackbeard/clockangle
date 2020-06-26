
function getAngle(hours, minutes) {
    const hour = hours % 12;
    const minute = minutes % 60;

    // leaving the algebra unsimplified to show my work:
    const hour_angle = (hour * 360) / 12 + ((minute / 60) * (360/12));
    const minute_angle = (minute * 360) / 60;

    let delta_angle = Math.abs(minute_angle - hour_angle);

    // we want the smallest angle between the hands:
    if (delta_angle > 180) delta_angle = 360 - delta_angle;

    return delta_angle;
}

exports.getAngle = getAngle;