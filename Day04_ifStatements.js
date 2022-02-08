         // 

         let num = 4;


         //When we use ==, we just compare the values
           console.log(num == "4");
       
       //When we compare the values and the data types, we use ===
           console.log(num === "4");
       
       //If we go for negative scenario, we use !==
       //!= will only compare the values of negative scenario
       //!== will compare the values and the data types of negative scenario
       //          num 4.     str  4
         console.log(num !==     "4");
       
           //&&.  true vs true. => true
         //&&     false vs true. => false
         //&&     true vs false. => false
           //&&.  false vs false => false



            // When we want to have multiple options, we use || operator 

        // true vs true => true
        //true vs false => true
        // false vs true => true
        //false vs false  => false


      //If I have a car, I can go shopping
      //If I have a bus, I can go shopping

      let car = true;
      let bus = false;
      if(car || bus){
        console.log("I can go shopping");
      }

      //car is available, but bus is not available