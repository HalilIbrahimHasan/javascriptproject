 
 
   var user = {
      
    firstName : 'Sam',
    lastName : 'Collin',
    isEmployed: true,
    isLocation: 'New Jersey'

  }
   //regular way of getting elements 
//     console.log(user.firstName);
//     console.log(user.lastName);
//     console.log(user.isEmployed);
//     console.log(user.isLocation);
    
   //we are generating new naming convention for object variables and can use them
  var {firstName,lastName,isEmployed, isLocation} = user; //

  


//     console.log(firstName);
//     console.log(lastName);
//     console.log(isEmployed);
//     console.log(isLocation);


//     isLocation = 'Virginia';
//     console.log(isLocation);


  function getUser (){
    
    return {
      
      name2 : 'Sam',
      location2 : 'NYC',
      email: 'sam@gmail.com'
      
    }
    
  }


//     var {name2, location2, email} = getUser();

//     console.log(name2);
//     console.log(location2);
//     console.log(email);


  var user2 = ['Tim', 'LA', 'tim@gmail.com'];

  //Regular way
//     console.log(user2[0]);
//     console.log(user2[1]);
//     console.log(user2[2]);



  var [userName, userLocation, userEmail] = user2;

  console.log(userName);
  console.log(userLocation);
  console.log(userEmail);
