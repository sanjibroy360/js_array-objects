var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
};  

var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
};

  
var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
};

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


let penguins = [gunter, ramon, fred];

console.log(penguins[0]);

let secondPenguin = penguins[1];

console.log(penguins[ (penguins.length - 1) ].name);

penguins.push(myPenguin);

console.log(penguins.length);

penguins[0].canFly = true;

penguins[0].sayHello();

for(let i = 0; i <= ( penguins.length - 1 ); i++) {
    console.log(penguins[i].name);
}

for(let i = 0; i <= ( penguins.length - 1 ); i++) {
    console.log(penguins[i].sayHello());                 
}

for(let i = 0; i <= ( penguins.length - 1 ); i++) {
    penguins[i].numberOfFeet = 2;
}

for(let i = 0; i <= ( penguins.length - 1 ); i++) {
    if(penguins[i].canFly) {
        console.log(`${penguins[i].name} can fly!`);
    }
}




  