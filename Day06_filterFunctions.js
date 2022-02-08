 //We will use Filter function to filter array elements
    //This will return your specific conditions

    var numbers = [2,42,23,43,3,5];

 ///                2 , 42, 23, 43 
    const newNums = numbers.filter(
    
      function (num){
        return num > 25;
      }
    
    )

    console.log(newNums);
    
   //

    const newNums2 = numbers.filter (x => x > 25)
    
    console.log(newNums2);

    const newNums3 = [];

    numbers.forEach(
    
      function (num){
        
        if(num > 25){
          newNums3.push(num);
        }
        
      }
    )

   console.log(newNums3);

    //we can also use for each loop with a ternary //also use arrow functions
       var newNums4 = [];
        
       numbers.forEach(
       
         x => x > 25 ? newNums4.push(x): newNums4.push()
       
       )

      console.log(newNums4);
        
        