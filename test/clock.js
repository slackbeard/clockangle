const assert = require("assert");
const clock = require("../clockangle.js");

describe("Angle", function() {
    describe("happy", function() {
        // For this exercise I'm only including a "happy" path test.
        // For larger projects I would have more than this.
        it("should return 90 degrees for the time 9:00", function() {
            assert.equal(90, clock.getAngle(9, 0));
        });
    });
});