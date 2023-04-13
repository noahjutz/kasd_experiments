const { assert } = require("chai");
const { setTimeout } = require("timers/promises");

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

suite("Blocking tests", function () {
  setup(function () {
    // ... requires no setup
  });

  test("synchronous 1", function () {
    wait(1500);
  });

  test("synchronous 2", function () {
    wait(1500);
  });

  test("asynchronous 1", async function () {
    await setTimeout(1500);
  });

  test("asynchronous 2", async function () {
    await setTimeout(1500);
  });

  test("asynchronous 3", async function () {
    setTimeout(1500); // mocha doesn't wait
  });
});
