let penguin = {};

penguin.favoriteFoods = ["Krill", "cod", "lantern fish", "Squid"];

console.log(penguin.favoriteFoods[1]);

let firstFavFood = penguin.favoriteFoods[0];

penguin.favoriteFoods.push("sardines");

console.log(penguin.favoriteFoods.length);

penguin.favoriteFoods[penguin.favoriteFoods.length - 1] = "pineapples";

lastFavFood = penguin.favoriteFoods[ (penguin.favoriteFoods.length - 1) ];

for(let i = 0; i <= (penguin.favoriteFoods.length - 1); i++) {
    console.log(penguin.favoriteFoods[i]);
}