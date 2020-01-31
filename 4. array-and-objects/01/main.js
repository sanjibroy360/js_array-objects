let myPenguin = {
    name : "Whiteblack",
    origin : "Whiteblack the Penguin Sees the World",
    author : "H.A Rey and Margret Rey",
    notes : "Children's book about a travelling penguin",
    canFly: false,
    sayHello: function () {
        console.log("Hi there!");
      }
    
};



myPenguin.favoriteFoods = ["Krill", "lantern fish", "Squid"];

console.log(myPenguin.favoriteFoods[1]);

let firstFavFood = myPenguin.favoriteFoods[0];

myPenguin.favoriteFoods.push("sardines");

console.log(myPenguin.favoriteFoods.length);

myPenguin.favoriteFoods[myPenguin.favoriteFoods.length - 1] = "pineapples";

lastFavFood = myPenguin.favoriteFoods[ (myPenguin.favoriteFoods.length - 1) ];

for(let i = 0; i <= (myPenguin.favoriteFoods.length - 1); i++) {
    console.log(myPenguin.favoriteFoods[i]);
}