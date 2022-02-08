   
   //Reduce function
  // it accunulates all the values of an array
            /// 0+1 =1 +1 =2 +1, 3+ 5
            var numbers = [0, 11, 1, 24, 38, 5, 888];

            numbers.reduce(
            
            function (accumulator, eachNumber){
              
              console.log('accumulator: '+accumulator);
              console.log('each number: '+eachNumber);
              return accumulator ;
              
            }
            )
                
                //please share me the sum of numbers
            
                var result = numbers.reduce(
                  
                   (accumulator, eachNumber) => accumulator + eachNumber
                  
              )
                console.log(result);
                
        
              //max element of an array using reduce function
        
               console.log(numbers.reduce( (accumulator, max) => accumulator > max? accumulator: max, 0  ));
        
              //Find element
              // when we use find function, it looks for a specific condition and returns the first condition
                
                
                const myNumber = numbers.find(
                
                function (eachItem){
                  return eachItem > 20;
                }
                
                )
                
                
                console.log(myNumber);
        
                //findIndex function does the same action, but just returns the index of the item
        
                const myNumber2 = numbers.findIndex(
                
                function (eachItem){
                  return eachItem > 20;
                }
                
                )
                console.log(myNumber2);
        
        
                
                
                
                