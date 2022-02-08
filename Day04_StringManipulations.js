//String manipulations


//   let name = prompt('Please type your name');

//   let length = name.length;

  //I love 'Java Script'
  let sentence = " I love Java Script ";

  //split => split means sperating from a specific part of the string eg. ' ' 
  
  //   console.log(sentence.split(' ')[2]);
  
  // console.log(sentence.trim());
  
  //When we want to get a specific index element, then we can use indexOf
  console.log(sentence.indexOf('Java'));
  
  // Ask user to type their name and print on console first initial Upper case and rest as lower Case
  //ibrahim. / Ibrahim
  let name = prompt('Type your name'); 

  
  // Ask user to type their name and print on console first initial Upper case and rest as lower Case
//ibrahim. / Ibrahim
let name = prompt('Type your name'); 

console.log(name.slice(0,1).toUpperCase()+ name.slice(1));


//1. way fo con.
// console.log(sentence + name);
//2. way
// console.log(sentence.concat( name));

let sentence = `my name is ${name} and I am from ..`;
//3. way
console.log(sentence);