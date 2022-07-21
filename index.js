const source = {
  a: "a",
  b: "b",
  c: "c",
  d: "d",
  e: "e"
}

const pick = (properties, source) => properties.reduce((destination, property) => ({
  ...destination,
  [property]: source[property]
}), {});

const destination = pick(["c", "d", "e"], source);

console.log(destination);