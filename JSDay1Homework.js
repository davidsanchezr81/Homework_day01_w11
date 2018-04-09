
// 1) The constant name is initilised out of the function. It will be printed in the string `My name is ${ name }`
// which is the function printName itself.
const name = 'Keith';

const printName = function () {
  console.log(`My name is ${ name }`);
}

printName();

////////////////////////////////////

// 2) Since " const " works within the Block Scope, it should return '3,
// because the first de 'const score = 5'
const score = 5;

const result = function () {
  const score = 3;
  return score;
}

console.log(result());

/////////////////////////////////////

// 3) sin myAnimals is constant, it cannot be modified inside the function at line 29,
// and also in cannot be increased in the for loop in line 32
const myAnimals = ['Chickens', 'Cats', 'Rabbits'];
// var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

const listAnimals = function () {
  // var listAnimals = function () {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];

  for (const i = 0; i < myAnimals.length; i++) {
    // for (var i = 0; i < myAnimals.length; i++) {
    console.log(`${ i }: ${ myAnimals[i] }`);
  }
}

listAnimals();


////////////////////////////////

 // 4) suspectThree is declared twice, one outside (line 44) and one inside the function(line 48).
 // a) The first (Keith) will be printed by line 53 and the second (Harvey) will be printed by line 49 //////////

const suspectOne = 'Jay';
const suspectTwo = 'Val';
const suspectThree = 'Keith';
const suspectFour = 'Rick';

const allSuspects = function () {
  const suspectThree = 'Harvey';
  console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
}

allSuspects();
console.log(`Suspect three is: ${ suspectThree }`);

///////////////////////////////////////////

// 5) The error is on line 65, DONT KNOW WHY ///////////////////////

const detective = {
  name: 'Ace Ventura',
  pet: 'monkey'
};


const printName = function (detective) {
  return detective.name;
}


const detectiveInfo = function () {
  detective['name'] = 'Poirot';
  return printName(detective);
}

console.log(detectiveInfo());

////////////////////////////////////////////

// 6) At first line 89 provide an error since the instead of usiing '===' it has been used '='.
//  Secondly, 'murderer' cannot be modified form 'rick' because is a constant, therefore
// outerFunction is not working.
// The final print will be executed by line 99 /////////////////

const murderer = 'rick';

const outerFunction = function () {
  const murderer = 'marc';

  const innerFunction = function () {
    murderer === 'valerie'; // instead of = it should be ===;
  }

  innerFunction();
}

outerFunction();
console.log(`The murderer is: ${ murderer }`);
