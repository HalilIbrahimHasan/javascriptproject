
//       var array = ['a', 'b', 'c'];
  
//       //way 1
//       array.forEach(
     
//       function (element){
//         console.log(element);
//       }
      
      
//       )

//       //Way 2
      
//       array.forEach(
      
      
//        (element) => {
        
//         console.log(element);
//       }
      
      
//       )
      
//       //Way 3
//       array.forEach(
      
//         element => {console.log(element);}
      
//       )
      
//       //way 4 

//         array.forEach(
      
//         element => console.log(element)
      
//       )
        
        
        
todos = [
          
    {
      id: 1,
      text: 'Wash the dishes',
      isCompleted: true
    },
    
    {
      id: 2,
      text: 'wash the car',
      isCompleted: false
    },
    {
      id: 3,
      text: 'doctor appointment',
      isCompleted: true
    }
    
    
    
  ]
  
  
  todos.forEach(
  
  function (todo){
//           console.log(todo);
              
         console.log(todo.id);

  }
  
  
  
  )
  
  
  
  