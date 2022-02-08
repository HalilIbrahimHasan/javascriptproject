
      // functions have return types as well as non return types

//       function greet(){
//         console.log("Hi everyone");
//                 console.log("Welcome to JavaScript");

//       }


//       greet();


function greetPeople(person){
        
    console.log(`${person} is greeting you`)
    
  }
  greetPeople("Ibrahim");
  function greetPeople(person){
        
    console.log(`${person} is greeting you`)
    
  }
  greetPeople("Ibrahim");

  greetPeople(5);

  greetPeople(true);


  //When we use function, we can just give the variable names and no need for data type
     //For function parameters, we can also use default values

     function personInfo(firstName, lastName, location ="VA", isWorking){
       
       
        console.log(`${firstName}, ${lastName},${location},${isWorking}, `);
        
      }
 
 //       personInfo("Ibrahim", "Settar", "North Carolina", true);
 
 
       personInfo("Ibrahim", "Settar", "North Carolina");


        //ask user to provide 2 numbers and get their addition, subtraction, division and multiplicatio
     let x = parseInt( prompt('type a number'));

     let y = parseInt( prompt('type a number'));


     function add(x,y){
       console.log(x+y);
     }

    function subtract(x,y){
       console.log(x-y);
     }

    function divide(x,y){
       console.log(x/y);
     }

    function multiply(x,y){
       console.log(x*y);
     }

    add(x, y);
    multiply(x, y);
     subtract(x, y);
    divide(x, y);



    var total = function (num1, num2,num3){
        console.log(num1+num2+num3);
      }
      
      total(3, 4, 5);





      function sum (){
    
        let num1 = 5;
        let num2 = 8;
        let num3 = 3;
        return num1+num2+num3;
        
        
      }
    
    //     console.log( sum());
    
        function square(v){
          
          return v * v;
          
        }
    
    
        console.log(square(5));
    
        //use 3 params, you need to add them with a function, but the default values should be 3, 2, 1
    
        function addNumbers(n1=3, n2=2,n3=1){
          return n1+n2+n3;//6
        }
    
    
        console.log(addNumbers(23, 2, 4));
        console.log(addNumbers());



    //ask user to give 2 numbers, generate a function and assign them to a variable, then print on the console

    let n1 = parseInt(prompt('type a number'));
    let n2 = parseInt(prompt('type a number'));

    let total = function (n1, n2){
      
      return n1+n2;
    }
    
    console.log(total(n1, n2));

