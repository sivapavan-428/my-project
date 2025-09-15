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
let bw = Number(prompt("Enter b Value : "));
let c = (aw ** 2) + (bw ** 2);
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

let objq = {a: 10, b: 20, c: 30};
console.log('b' in objq); // true
console.log('30' in objq); // false


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

let arq = []
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
arq.push(ob1);
arq.push(ob2);
arq.push(ob3);
console.log(arq[2].quantity)

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
let at = greet(4, "Ji")
console.log(at)

let varContainingFunction = function() {
 let varInFunction = "I'm in a function.";
 console.log("hi there!", varInFunction);
 return {varInFunction};
};
varContainingFunction();
console.log(typeof varContainingFunction())

let operator = "+";
function operation(one, two){
  if (operator === "+"){
    return  one + two;
  }
  else if (operator === "-"){
    return one-two;
  }
  else{
    return "No Operand is Present"
  }
}
let ar = operation(3,6)
console.log(ar)
console.log(typeof operator)

const obj = {
  value: 10,
  regular: function() { console.log(this.value); }, // works
  arrow: (() => { return () => console.log(this.value);}) () // undefined in most cases
};
obj.regular(); // 10
obj.arrow();   // undefined

const square = (x) => { return x*x};
console.log(square(4)); // 16

const details = (name , age) => ({  name, age});
console.log(details("Jai",24))

let addTwoNumbers = (x, y) => {
 console.log("Adding...");
 return x + y;
}
const ag = addTwoNumbers(4,8)
console.log(ag)

let a = 10;
function number(){
    return a;    
}
console.log(number())

function getRecursive(nr) {
 console.log(nr);
 if(nr > 1 ){
     getRecursive(--nr);
 }
 else{
    console.log("Done with Recursion")
 }
}
getRecursive(3);

function printNum(n) {
  if (n > 5) return;   // stop condition
  console.log(n);
  printNum(n + 1);     // recursive call
}
printNum(1);

function person(name="Jai" , age=24){
    this.name = name;
    this.age = age;
}
console.log("Hi My name is " + person.name + " And my age is " + person.age )

class Dog {
    dogName;
    weight;
    color;
    breed;
    constructor(dogName, weight, color, breed) {
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed = breed;
    }
}
let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
const dog2 = new Dog("Tom",5,"blue","cartoon"  )
console.log(dog)

class Person {
 #firstname;
 #lastname;
 constructor(firstname, lastname) {
 this.#firstname = firstname;
 this.#lastname = lastname;
 }
 get firstname() {
 return this.#firstname;
 }
 set firstname(firstname) {
 this.#firstname = firstname;
 }
 get lastname() {
 return this.#lastname;
 }
 set lastname(lastname) {
 this.#lastname = lastname;
 }
}
const p = new Person("Siva","Pavan")
console.log(p.firstname + p.lastname)

class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }
    move() {
        return "moving at "+this.currentSpeed + " Kmph";
    }
    accelerate(amount) {
        this.currentSpeed += amount;
        return this.currentSpeed;
    }
}
const v = new Vehicle("red",40 , 120 )
console.log(v)
console.log(v.move())
const am = v.accelerate(30)
console.log(am)
class bike extends Vehicle{
    constructor(color, currentSpeed, maxSpeed, fuel){
        super()
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
        this.fuel=fuel;
    }
    move(){
        return  "This Bike moving at "+this.currentSpeed + " Kmph";
    }
    fuelStorage(){
        return "This Bike has " + this.fuel + " Liters Storage"
    }
}
const b = new bike("green", 60,150,30)
console.log(b)
console.log(b.move())
console.log(b.accelerate(40))
console.log(b.fuelStorage())

class Person1 {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log("Hi there!");
    }
}
Person1.prototype.introduce = function () {
    console.log("Hi, I'm", this.lastname);
};
const per = new Person1("Siva", "Pavan"); // greet() introduce()
const pers = new Person1("qwe", "zxc"); // greet()
console.log(per.greet())
console.log(per.introduce())


class Person2 {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log("Hi there!");
    }
    introduce() {
        console.log("Hi, I'm", this.firstname);
    };
}
const pe2 = new Person2("Siva", "Pavan"); //greet() , introduce()
const pe3 = new Person2("abc" , "xyz"); // greet() , introduce()
console.log(pe2.greet())
console.log(pe2.introduce())
console.log(pe3.greet())
console.log(pe3.introduce())

let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURI(uri);
console.log("Decoded:", decoded_uri);

console.log(parseInt("42"));       // 42
console.log(parseInt("42px 34"));     // 42  ✅ stops at "px"
console.log(parseInt("3.14"));     // 3   ✅ drops decimal
console.log(parseInt("101", 2));   // 5   ✅ binary to decimal
console.log(parseInt("abc"));      // NaN

let nums = [1, 2, 3, 4];
nums.forEach(function (num, i, ar) {
    console.log("Element : " ,num);
    console.log("Index : " ,i);
    console.log("Total Array : ",ar);
});

arr = ["grapefruit", 4, "hello", 5.6, true];
arr.copyWithin(0, 1, 5);
console.log(arr)

let bb = ["so", "bye", "bye", "love"];
console.log(bb.lastIndexOf("bye"));

let s1 = "Hello ";
let s2 = "JavaScript"; // Hello JavaScript
let result = s1.concat(s2);
console.log(result);

let ao = "I love JavaScript"
console.log(ao.replace("ava","0v0").replace("I","1").replace("o","0").replace("e","3").replace("l","7").replace("ip","19"))

const fruitss = ["Banana", "Orange", "Apple", "Mango"];
let myList = fruitss;
// document.getElementById("demo").innerHTML = myList;
console.log(typeof myList);
console.log(myList)

let arrd = ["a", "b", "c"];
console.log(arrd.indexOf("e")); // -1
console.log(arrd.includes("d")); // false


let arra = ["a","b","c"];
console.log(arra.join("-")); // a-b-c
console.log(arra.toString(" "))
console.log(arra.slice(0,2)); // ["a","b"]

arra.splice(1, 1, "x"); // remove 1 element at index 1, insert "x"
console.log(arra); // ["a","x","c"]

async function asyncFunc() {
  return 42;
}
async function caller() {
  let result = await asyncFunc();
  console.log(result); // 42
return result;
}
console.log(caller());
console.log(asyncFunc())