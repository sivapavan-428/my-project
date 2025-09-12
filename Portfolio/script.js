let arr = [1,2,3,4]

console.log(arr);
arr.push(5);
console.log(arr);
arr.pop(1);
console.log(arr);

let numbers = [1, 2, 3, 4, 5];
let without3 = numbers.filter(n => ((n !== 3) && (n !== 4)));
console.log(without3); 


for( let i =1; i <=100 ; i++){
    if(i % 8 == 7){
        console.log(i);
    }
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4, 5, 6]

console.log(arr1 + arr2) // 1,2,34,5,6  
// we got output as string and no spaces between them.

console.log(...arr1, ...arr2) // 1 2 3 4 5 6
console.log([...arr1, ...arr2]) // [ 1, 2, 3, 4, 5, 6 ]

const combined1 = [...arr1 , ...arr2];
console.log(combined1); // [1, 2, 3, 4, 5, 6 ]

const fruits = ["Banana", "Apple", "Mango", 5, "10", true, {name:"pavan"}];
fruits.sort();
console.log(fruits); // [ 10, 5, 'Apple', 'Banana', 'Mango', { name: 'pavan' }, true ]


const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 }
  ];

  const namesq = users.map(user => user.name);
  console.log(namesq); // ["Alice", "Bob"]

console.log(users[1].name);

const numbers2 = [1, 2, 3, 4, 5];

const sum = numbers2.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

const numbers3 = [1, 2, 3, 4];

const product = numbers3.reduce((acc, curr) => acc * curr, 5);
console.log(product); // 24

console.log(numbers3.unshift(8));
console.log(numbers3)


function add(a, b){
    return console.log(a+b);
}
add(2,3);
add(5,8);

function add(...numbers) {
    // console.log(arguments);
    return numbers;
}
console.log(add(2, 3, 5, 10));


let ageq = 10;
let accessq = age < 18 ? "denied" : "allowed";
console.log(accessq);
age < 18 ? console.log("denied") : console.log("allowed");

let randNum = Math.random() * 1000;
console.log(randNum)
console.log(Math.ceil(randNum));
console.log(Math.floor(randNum));
console.log(Math.round(randNum));
console.log(Math.floor(-4.9));


let strq = "Hello, what's your name? Is it \"Mike\"?";
console.log(str);
let str2 = 'Hello, what\'s your name? Is it "Mike"?';
console.log(str2);

let xq = Symbol(10);
let yq = Symbol(10);
console.log(xq === yq);

let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;
console.log("str", typeof str);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unknown", typeof unknown);

if (unknown === null) {
  console.log("It's really null!");
}


let nr1q = 2;
let nr2q = "8";
console.log(nr1q * nr2q);

console.log(Number("Hi"))  // NaN

let i = 10;

console.log(i, i++);
console.log(i, ++i);
console.log(i, i--);
console.log(i, --i);

let z = 10;

let aq = z++;
console.log(z);
let bq = ++z;
console.log(z);
let cq =  z--;
console.log(z);
let dq = --z;
console.log(z);


console.log("HI");
console.log(aq);
console.log(bq);
console.log(cq);
console.log(dq);

let nr1 = 4;
let nr2 = 5;
let nr3 = 2;
console.log(nr1++ + ++nr2 * nr3++);

let aw = Number(prompt("Enter a value : "));
let b = Number(prompt("Enter b Value : "));
let c = (aw ** 2) + (b ** 2);
console.log(c);


const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter a value: ", (a) => {
  readline.question("Enter b value: ", (b) => {
    const numA = Number(a);
    const numB = Number(b);
    const c = (numA ** 2) + (numB ** 2);
    console.log(`The sum of squares is: ${c}`);
    readline.close();
  });
});


let x = 5;
let y = "5";
console.log(x == y);
console.log(x === y)
console.log(x != y)
console.log(x !== y)

let mile;
let kilo = 130;
// function cMtoKM(){
   mile = 1.60934 * kilo;
// }
// console.log(cMtoKM(20))
console.log(`The distance of ${kilo} kms is equal to ${mile} miles`)


colors = ["black", "orange", "pink"]
booleans = [true, false, false, true];
emptyArray = [];
console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of empty array:", emptyArray.length);
console.log(`Length of empty array:, ${colors.length}`);

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
console.log(arrOfShapes[2])
arrOfShapes.splice(2, 1, "square", "trapezoid");
console.log(arrOfShapes);
console.log(arrOfShapes[2])

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
console.log(arr5.concat(arr6)); // [ 1,2,3,4,5,6]
console.log(arr5,arr6) // [1,2,3] [4,5,6]
console.log([arr5,arr6]) //[[1,2,3],[4,5,6]]
console.log([arr5+arr6]) //[ '1,2,34,5,6' ]
console.log(arr5+arr6) // 1,2,34,5,6
console.log(...arr5 ,...arr6) // 1 2 3 4 5 6 
console.log([...arr5 ,...arr6]) // [1,2,3,4,5,6]

let arr7 = [1,2,3,4,5,6,7,8,9];
console.log(arr7)
while (arr7.length>0){
    arr7.shift();
    console.log(arr7)
}

let arr8 = [];
console.log(arr8)
for(i = 0; i <=10; i++){
    arr8.push(i * 1);
    console.log(arr8)
}

let obj = {a: 10, b: 20, c: 30};
console.log('b' in obj); // true
console.log('30' in obj); // false


let obj2 = {a: 10, b: 20, c: 30};
let valueExists = Object.values(obj2).includes(20);
console.log(valueExists); // true

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
console.log(names)
names.sort();
console.log(names.sort().reverse())
console.log(names.reverse())

let arr9 = [];
let obj3 = {};
console.log(typeof arr9);
console.log(typeof obj3)

let human = { 
    name: "jai",
    age:24,
    height: "175 cm",
    weight: "65 kg",
    color: "brown",
    nationality : "Indian",
    hairColor : "Black",
    eyeColor : "Black",
    gender : "Male"
};
let ae = "name" in human;
console.log(ae)
console.log(human.color)  
console.log(human["age"] = 26)
console.log(human)
console.log(Object.keys(human))
console.log(Object.values(human))
console.log(Object.entries(human.name))

let company = { companyName: "Healthy Candy",
 activity: "food manufacturing",
 address: {
 street: "2nd street",
 number: "123",
 zipcode: "33116",
 city: "Miami",
 state: "Florida"
 },
 yearOfEstablishment: 2021
};
console.log(company.address.number)

let ar = []
let ob1 = {
    name : " car",
    model : " SUV",
    cost : "30L ",
    quantity : 10
};
let ob2 = {
    name : "Bike ",
    model : " 500cc",
    cost : "15L ",
    quantity : 15
};
let ob3 = {
    name : " Houes",
    model : " 4 BH",
    cost : " 5 cr",
    quantity : 2
};
ar.push(ob1);
ar.push(ob2);
ar.push(ob3);
console.log(ar[2].quantity)

const myArr1 = [1,3,5,6,8,9,15];
console.log(myArr1.indexOf(0));
console.log(myArr1.indexOf(3));
myArr1[10] = 6;
console.log(myArr1)
console.log(myArr1[7])


let age = 20;
let access = age < 18 ? "denied" : "allowed";
console.log(access)
let ac = age < 18 ? console.log("denied") : console.log("allowed");
console.log(ac)

let activity = "Lunch";
switch(activity) {
  case "Get up":
    console.log("It is 6:30AM");
    break;
  case "Breakfast":
    console.log("It is 7:00AM");
    break;
  case "Drive to work":
    console.log("It is 8:00AM");
    break;
  case "Lunch":
    console.log("It is 12:00PM");
    break;
  case "Drive home":
    console.log("It is 5:00PM");
    break;
  case "Dinner":
    console.log("It is 6:30PM");
    break;
  default:
    console.log("Activity not found");
}
activity = "Dinner";

const q = 2.3;
switch (q) {
    case '1':
        answer = "one";
        break;
    case 1:
        answer = 1;
        break;
    case 2.3:
        answer = "this is the one";
        break;
    default:
        answer = "not working";
}
console.log(answer);

let name1 = ["Jai", "Siva", "Pavan", "Vishnu", "Vardhan", "Varadha","Penumaru"];
console.log(`The names that starts with " P " are`)
let match = 0
for (let i = 0; i <= name1.length - 1; i++) {
    console.log(name1[i], name1[i].startsWith("P"))
    if (name1[i].startsWith("P") ) {
        match++;
    }
}
console.log(`There are a total of ${match}`)

let step = 3;
for (let i = 0; i < 1000; i += step) {
 if (i > 10) {
 break;
 }
 console.log(i);
}

function greet(...arguments){
    console.log("hi");
}
let a = greet(4, "Ji")

let varContainingFunction = function() {
 let varInFunction = "I'm in a function.";
 console.log("hi there!", varInFunction);
 return {varInFunction};
};
varContainingFunction();
console.log(typeof varContainingFunction())