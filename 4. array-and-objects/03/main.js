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

myPenguin.outfit = {
    hat : "baseball cap",
    shirt : "Hawaiian shirt",
    pants : "cargo shorts",
    shoes : "flip-flops"
};

let penguinHatType = myPenguin.outfit.hat;

console.log(penguinHatType);

myPenguin.outfit.accessory = "pocket watch";

delete myPenguin.hat; 

myPenguin.outfit.hat = "top hat";

delete myPenguin.outfit.pants;

for(let key in myPenguin.outfit) {
    console.log(myPenguin.outfit[key]);
}