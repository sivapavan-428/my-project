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
  
  const names = users.map(user => user.name);
  console.log(names); // ["Alice", "Bob"]
  
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

add(5,8)

function add(...numbers) {
    // console.log(arguments);
    return numbers;
  }
  
  console.log(add(2, 3, 5, 10));
  