const array1 = [1, 2, 3, 4, 5];
array1.forEach((element) => {
    console.log(element);
});


const array2 = [{ name: 'name1', grade: 'A' },
    {name: 'name2', grade: 'B'},
    {name: 'name3', grade: 'A'},
    {name: 'name4', grade: 'D'},
    {name: 'name5', grade: 'B'},
    {name: 'name6', grade: 'C'},
    {name: 'name7', grade: 'A'},
    {name: 'name8', grade: 'B'},
    {name: 'name9', grade: 'C'}];
array2.map(item => console.log(item));
const newarray2 = array2.map(array2 => array2.grade);
console.log(newarray2);


const array3 = [20, 16, 15, 19, 18];
const newarray3 = array3.filter(array3 => array3 >= 18);
console.log(newarray3);


const array4 = [30, 40, 90, 20, 120, 50];
const newarray4 = array4.find(array4 => array4 > 50);
console.log(newarray4);


const array5 = [200, 450, -230, 940, 230, -670, 390];
const newarray5 = array5.findIndex(array5 => array5 < 0);
console.log(newarray5);


const array6 = ['aword', 'bword', 'cword', 'dword', 'eword', 'fword'];
const newarray6 = array6.indexOf('cword');
if (newarray6 > 0) {
    console.log('cword is in the array');
} else {
    console.log('cword is not in the array');
}


const array7 = [{name1: 'user1', hasPaid: false},
    {name1: 'user2', hasPaid: false},
    {name1: 'user3', hasPaid: false},
    {name1: 'user4', hasPaid: false},
    {name1: 'user5', hasPaid: false}];
const newarray7 = array7.some(array7 => array7.hasPaid === true);
console.log(newarray7);


const array8 = [{name1: 'product1', inStock: true},
    {name1: 'product2', inStock: true},
    {name1: 'product3', inStock: true},
    {name1: 'product4', inStock: true},
    {name1: 'product5', inStock: true}];
const newarray8 = array8.every(array8 => array8.inStock === true);
console.log(newarray8);


const array9 = ['Red', 'Blue', 'Green', 'Yellow', 'Pink'];
const newarray9 = array9.includes('Green');
if (newarray9 === true) {
    console.log('Green is in the array');
} else {
    console.log('Green is not in the array');
}


const array10 = ['hello', 'world', 'good', 'morning', 'everyone'];
const newarray10 = array10.join(' ');
console.log(newarray10);


const array11 = new Array(10).fill('empty');
console.log(array11);


const array12 = ['ben', 'jerry', 'tim', 'kim', 'arthur','casey'];
const newarray12 = array12.sort();
console.log(newarray12);


const array13 = [1, 3, 5, 7, 9];
const newarray13 = array13.reverse();
console.log(newarray13);


const array14 = ['apple', 'banana', 'strawberry', 'kiwi', 'orange'];
const newarray14 = array14.push('grape');
console.log(array14);


const array15 = ['milk', 'bread', 'cheese', 'butter', 'eggs'];
const newarray15 = array15.pop();
console.log(newarray15);


const array16 = [1, 2, 3, 4, 5];
const newarray16 = array16.toString();
console.log(newarray16);


const array17 = ['under'];
const array172 = ['construction'];
const array173 = ['bro!'];
const newarray17 = array17.concat(array172, array173);
console.log(newarray17);


const array18 = ['login3', 'login4', 'login5', 'login6', 'login7'];
const newarray18 = array18.unshift('logincustom1');
console.log(array18);


const array19 = ['task1', 'task2', 'task3', 'task4', 'task5'];
const newarray19 = array19.shift();
console.log(newarray19);


const array20 = ['gradeA', 'gradeB', 'gradeC', 'gradeD', 'gradeF'];
const newarray20 = array20.slice(0, 3);
console.log(newarray20);


const array21 = [1, 2, 3, 6, 7, 8, 9];
const newarray21 = array21.splice(2, 1, 4, 5);
console.log(array21);
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)


const array22 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newarray22 = array22.copyWithin(4, 0, 3);
console.log(array22);
// copyWithin(target, start)
// copyWithin(target, start, end)


const array23 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newarray23 = Array.isArray(array23);
if (newarray23 === true) {
    console.log('array23 is an array');
} else {
    console.log('array23 is not an array');
}


const array24 = [1, 2, 3];
console.log(array24.valueOf());
// const array24 = [1, 2, 3];
// const newarray24 = Array.valueOf(array24);
// console.log(newarray24);
// if (newarray24 === array24) {
//     console.log('array24 is same as newarray24');
// }
// else {
//     console.log('array24 is not same as newarray24');
// }


const array25 = ['apple', 'banana', 'strawberry', 'kiwi', 'orange'];
const iterator1 = array25.entries();
console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);

// const array1 = ['a', 'b', 'c'];

// const iterator1 = array1.entries();

// console.log(iterator1.next().value);
// // Expected output: Array [0, "a"]

// console.log(iterator1.next().value);
// // Expected output: Array [1, "b"]


const array26 = ['task1', 'task2', 'task3', 'task4', 'task5'];
const iterator2 = array26.keys();
console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().value);


const array27 = ['blue', 'green', 'yellow', 'red', 'orange'];
const iterator3 = array27.values();
console.log(iterator3.next().value);
console.log(iterator3.next().value);
console.log(iterator3.next().value);
console.log(iterator3.next().value);
console.log(iterator3.next().value);


const array28 = [3, 5, 7, 9, 11];
const newarray28 = array28.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(newarray28);

// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );


const array29 = [1, 2, [3, 4, [5, 6]]];
const newarray29 = array29.flat();  //1 or 0 se 1 level tak flatten karega
console.log(newarray29);


// const array30 = ['hello there', 'how are you', 'doing today'];
// const newarray30 = array30.flatMap();
// console.log(newarray30);




// const arr1 = [1, 2, 1];

// const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

// console.log(result);
// // Expected output: Array [1, 2, 2, 1]

