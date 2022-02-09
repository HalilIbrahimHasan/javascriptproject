
   //Rectangle ==> width, heigth
   
      //First way of initializing a Map
      const fruits = new Map([
      
        ["apples", 500],
        ["bananas", 400],
        ["oranges", 300],
      ]
      
      )
  
      console.log();
  
  //     const fruits = new Map();
  
      
  //     fruits.set("apples", 500);
  //     fruits.set("bananas", 400);
  //     fruits.set("oranges", 300);
  
  //     console.log(fruits);
      
  //     fruits.forEach(
      
  //       function (value, key){
          
  //         console.log(key +" "+ value);
  //       }
      
      
  //     )
  
  //       var array = ['a', 'b', 'c'];
  
  //       for(var value of array){
  //         console.log(value);
  //       }
  
  
  
  
  
  //       for(const x of fruits.keys()){
         
          
  //         console.log(x);
          
  //       }
  
  
  //       for(const v of fruits.values()){
         
          
  //         console.log(v);
          
  //       }
  
  
          //get function will give us either value of the key 
  
           console.log(fruits.get('apples'));
  
      
  
          //get the size of your elements
  
          console.log(fruits.size);
  
          
  
          //Delete specific items from map
            
  //         console.log(fruits.delete("apples"));
  //         console.log(fruits.size);
  //         console.log(fruits.delete("apples"));
  
  //         //Delete all items
  //         fruits.clear();
            
  //         console.log(fruits.size);
  
  
  
            //we can also check if an item exists in map or not
  
            console.log(fruits.has("apples"));//true
            console.log(fruits.has("strawberry"));//false
  
            console.log (typeof fruits);
  
  
  
  
  
  