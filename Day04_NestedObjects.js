
  
   //Nested Objects in JS

   const personInfo = {
        
        
    fName: 'Jim' , 
    lName : 'Carrey', 
    age : 45 ,
    
    address : {
      
      street: '5th Avenue', 
      city : 'NYC',
      state : 'NY'
      
    },
    
    hobbies : ['soccer', 'fishing', 'hunting'],
    
    salary : function (){
      
      return '100K yearly'
    }

  }
  
  personInfo.fName = 'Ibrahim';
    console.log(personInfo.fName);
   

//print on the console hobbies
console.log(personInfo.hobbies[0]);
console.log(personInfo.hobbies[1]);
console.log(personInfo.hobbies[2]);
