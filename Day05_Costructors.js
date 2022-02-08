function sum (make, model, year) {
      
    return make +' '+model+' '+year;
    
  }

  // a constructor with params
  function Car(make, model, year){
    
    this.make = make;
    this.model = model;
    this.year = year;
    
  }

    var car1 = new Car('Tesla', 'model3', 2019);

    console.log(car1);

    console.log(sum('Honda', 'Accord', 2018));