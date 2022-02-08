 //ARRAYS:

 console.clear();
 var friendsList = ['Sam', 'Tom', 'Tim', 'John', 'Bob'];

 console.log(friendsList[0]);

 //When we want to add new elements, we can use push function
   friendsList.push('Jack');


 console.log(friendsList);

 //This function is used to add elements at the beginning
 friendsList.unshift('Mert');


 //This will remove the first element
 friendsList.shift();
 console.log(friendsList);
 

 //Remove the last element of the Array
 friendsList.pop();
 console.log(friendsList);





      //ARRAYS:
              // 0. 1   2.  3. 4
              var ages = [10, 14, 34, 16, 10];

              console.log(ages);
             
              console.log(typeof ages);
           
              //Get the first index
              console.log(ages.indexOf(10));
           
              //Get a specific item starting from a specific index
              console.log(ages.indexOf(10,1));
           
              //Get this specific item starting from the last index
           
             console.log(ages.lastIndexOf(10));
           
              //Look for something that does not exist..
               
              console.log(ages.indexOf(100)); // will return -1 that does not exist
           
           
              // includes function returns a boolean data type if an item exist or not
           
               console.log(ages.includes(14)); //true
           
              //Look if you have an item after a specific index
               console.log(ages.includes(14, 3));//false
           
               //Look for an item that does not exist
               console.log(ages.includes('apple'));//false



                     //ARRAYS:
    //This is an emplty array        
//    var ages = new Array();

   //Give a specific number to array
//   var ages = new Array(10);


   var ages = new Array(null, "ibrahim", 10, true);
   console.log(ages);
   var fruits = ['apple', 'orange', 'banana', false, 10];


   //We will use splice function for deletion, insertion etc..

 
   //Delete items using index
//       fruits.splice(2,1);
//       console.log(fruits);


   //insert new items deleting or not existing items
//       fruits.splice(1,0, "kiwi", 'peach');

//       console.log(fruits);

//       fruits.splice(2,2, "cherry", 'strawberry', 'appricot');

//       console.log(fruits);

       fruits.splice(-1, 1);//['apple', 'orange', 'banana', false, 10];

       console.log(fruits);
