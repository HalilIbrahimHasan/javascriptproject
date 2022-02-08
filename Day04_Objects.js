console.clear();
var person = {
  
  firstName : 'Omer' , 
  lastName : 'kiyici' , 
  age : 30, 
  isEmplopyeed : false
  
  
  
};


person.firstName = 'Ali';
console.log(person.firstName);


person['lastName'] = 'Avci';

console.log(person.lastName);


var dataToBeUpdated = 'age';

person[dataToBeUpdated] = 35;

 console.log(person);