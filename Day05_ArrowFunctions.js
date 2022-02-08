
      //We will learn destructuring in JS

      console.clear();

      //Arraow Functions
 
       function sum (num){
         
         return num + 100;
         
         
       }
 
       console.log(sum(4));
 
 
       //ARROW FUNCTION => case 1: one argument
 
       //remove function keyword(function) with name (sum)
       //1 way Then put an arrow in between params and body
 
        var arrow = (num) =>{
         
         return num + 100;
 
       }
       
       console.log(arrow(11));//111
 
 
       //2. way
 
       //Delete function and name, also delete the {} and delete also return keyword
       var arrow2 =  (num) => num + 100;
         
         console.log(arrow2(12));
       
       //3. way
 
       //Delete function and name, also delete the {} and delete also return keyword also you can remove params ()
         var arrow3 = num => num + 100;
     
         console.log(arrow3(6));
 
        //ARROW FUNCTION => case 1: with more than one argument
 
        function sum2 (n1 , n2){
          
          return n1 + n2 + 100;
          
        }
       
         console.log(sum2(2,3));
 
 
         //remove function keyword(function) with name (sum)
       //1 way Then put an arrow in between params and body
 
       
        var arrow4 =  (n1 , n2) => {
          
          return n1 + n2 + 100;
          
        }
        
        console.log(arrow4(2,6));
 
 
        //2. way
 
       //Delete function and name, also delete the {} and delete also return keyword
 
        var arrow5 = (n1 , n2) =>  n1 + n2 + 100;
          
       console.log(arrow5(3, 9));
          
        
       
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 