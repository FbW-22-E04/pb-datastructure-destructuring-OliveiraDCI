"use strict";
console.clear();

console.log("-----1-----");
const [fruit, vegetable, ...food] = [
  "banana",
  "cucumber",
  "bread",
  "cakes",
  "pizza",
];
console.log(fruit, vegetable, food);

console.log("-----2-----");
const obj = {
  fran: "witch",
  melvin: "batman",
};
const { fran, melvin } = obj;
console.log(fran, melvin);

console.log("-----3-----");
const band = {
  bandName: "Rasta Roots",
  musician: "Kirk mcDowell",
  nationality: "Jamaican",
  greatestHit: "One Love",
  genre: "reggae",
};
function bandDetails({ bandName, musician, nationality, greatestHit, genre }) {
  return `${musician} is a ${nationality} song writer and pianist. The '${bandName}' musician sings ${genre} and his greatest hit is "${greatestHit}"`;
}
console.log(bandDetails(band));
