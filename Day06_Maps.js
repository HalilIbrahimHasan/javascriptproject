      //Map will make life easier in JS

      var numbers = [2, 3, 54,32,5,32];


      function double (x){
        
        return x*2;
        
        
      }
      // do it in a different way
      const newNumbers3 = numbers.map(double);
      console.log("print these numbers: "+ newNumbers3);
  
      //when we use map, we can do any actions with a regular function through the elements of array
  
      const newNumbers = numbers.map (
      //         
      function double (x){
        
        return x/2;
        
        
      }
      
      
      )
      //This will be with each loop
      var newNumbers2 = [];
      numbers.forEach(
      
      function (element){
        console.log (element *2 ); 
        newNumbers2.push(element);
      }
      
      )
      
          console.log(numbers);
          console.log(newNumbers);
          console.log(newNumbers2);
  
          
          //how can we do the same actions with arrow functions in a for each loop?
  
  
          const newNumbers4 = [];
  
  
          numbers.forEach(x => newNumbers4.push(x*2))
          
          console.log(newNumbers4);
          
          
          
          