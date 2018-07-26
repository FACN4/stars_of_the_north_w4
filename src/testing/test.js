var test = require("tape");
var search = require("../search");

// Tests on the search function

test("Search returns an array", function(assert) {
  const actual = Array.isArray(search("a"));
  const expected = true;

  assert.equal(actual, expected, "Search returns an array");
  assert.end();
});

test("Large search returns an array of no more than 10", function(assert) {
  const actual = search("a").length;
  const expected = 10;

  assert.equal(
    actual,
    expected,
    "Large search returns an array of no more than 10"
  );
  assert.end();
});

test("Search finds the expected output", function(assert) {
  const actual = search("brachium")[0];
  const expected = "brachium";

  assert.equal(actual, expected, "Search finds the output and returns it");
  assert.end();
});

test("Empty string is ok", function(assert) {
  const actual = search("");
  const expected = [];

  assert.deepEquals(actual, expected, "Empty string");
  assert.end();
});
