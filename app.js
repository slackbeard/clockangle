const express = require("express");
const clock = require("./clockangle.js");

const app = express();

app.get('/v1/angle/:hour/:minute', (req, res) => {

    const angle = clock.getAngle(req.params.hour, req.params.minute);

    res.json({angle: angle });


});
app.listen(8000, "0.0.0.0");
