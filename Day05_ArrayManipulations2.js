          
   var drinks = ['water', 'coke', 'fanta', 'tea'];
   var snacks = ['sunchips', 'gold fish', 'nuts', 'popcorn']; 

   //we check if we have an array as type or not
//    console.log(Array.isArray('string'));

  //we can also concatenate arrays with each other
  const favFoods = drinks.concat(snacks);
  console.log(favFoods);

   //we can use slice function to have partial data from an array
   //we give starting index and ending index but ending index is exclusive
  const myFoods = favFoods.slice(1,5);
  console.log(myFoods);

  //we can also get items starting from the last index
  const slicedDrinks = drinks.slice(-2);

   console.log(slicedDrinks);//tea


  //if we use join method, we can have special chars in between items
  const joinedItems = drinks.join(' - ');
  console.log(joinedItems);

  //we can also make a single item joining them all
  
  const joinedItems2 = drinks.join('');
  console.log(joinedItems2);

  const joinedItems3 = drinks.join(',');
  console.log(joinedItems3);



  let firstArr = [1,2,3,4,5];//array  1 2 3 4 5
  let secondArr = [1,2,3,4,5];//array 1 2 3 4 5
                          
  //if we have == this checks if the values are the same or not
  //if we have === this checks if the values and data types are the same or not


  let isEqual = firstArr.toString() == secondArr.toiString();


  console.log(isEqual);

   //Objects will have always different concepts





   const existingNum = [5,234,51,61];
   const newNums = [6,1,8];

   //this is how we can join multiple array objects
   var allNums = [existingNum,newNums];
   
   console.log(allNums);

   //we can also use spread operators to combine array elements
   allNums = [...existingNum, ...newNums];
   console.log(allNums);

    //we can also use spread operators to combine array elements
   allNums = [...existingNum, newNums];
   console.log(allNums);

   allNums = [1000, ...newNums, true, ...existingNum, 'apple'];
   console.log(allNums);





  
