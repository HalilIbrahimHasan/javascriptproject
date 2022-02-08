 //Loops in Java Script

//     for(var i= 0; i< 5; i++){
      
// //       console.log(i);
      
//       console.log(`each number ${i}`);
//     }
    
const todos = [
      
    {
      id: 1,
      task: 'eating',
      isCompleted: true
      
    },
    
    {
      id: 2,
      task: 'shopping',
      isCompleted: true
    },
    
    {
      id: 3,
      task: 'walk the dog',
      isCompleted: false
    }

  ];
  
   console.log(todos[1].task);

  for(let i=0; i< todos.length; i++){
    
//       console.log(todos[i]);
      
     console.log(todos[i].id);
     console.log(todos[i].isCompleted);
     console.log(todos[i].task);

    
  }
   
  
  