const { test } = require("vitest");

test("test", () => {
  expect(true).toBe(true);
  expect(Math.random()).toBe(Math.random());
});

test("JSON", () => {
  const input = {
    a: "a",
    b: "b",
    c: "c",
  };
  const output = JSON.stringify(input);
  expect(output).toBe('{"a":"a","b":"b","c":"c"}');
});
