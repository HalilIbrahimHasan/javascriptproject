



    //normal function
//     function carInfo(brand, model, year){
      
//       return {
//         brand, model, year
//       };
      
      
      
//     };

//      const carFunction = carInfo('Nissan', 'Rogue', 2019);

//     console.log(carFunction);

    //generate a new Constructor having following items; name, age, hasLicense, languages[English, Spanish, Vietnamese, Turkish]


    function Employee (name, age, hasLicense,languages){
        this.name = name;
        this.age = age;
        this.hasLicense = hasLicense;
        this.languages = languages;
      }
 
       const personJim = new Employee('Jim', 20, true, ['English', 'Spanish', 'German']);
 
       console.log(personJim);
 
       //we can also get specific items from employee
       console.log(personJim.name); 
       console.log(personJim.age); 
       console.log(personJim.hasLicense); 
 
 
        console.log(personJim.languages[1]); 
 
 
       const personAsim = new Employee('Asim', 30, true, ['English', 'German']);
 
       console.log(personAsim);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 