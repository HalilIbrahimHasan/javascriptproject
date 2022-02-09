//Using OOP concept inJS, Create a Square class
    // You need just one param for the constructor => width 
    //when we initialize, we need to initialize 2 params in the class => width , heigth
    //generate a function/ method to get the area odf the square
    //generate also a toString method to see the description for the values
    

    class Square {
        
        constructor(width){
          
          this.width = width;
          this.heigth = width;
          
        }
        
        area(){
          
          
          return this.width * this.heigth;
          
          
        }
        
        toString(){
          
            return `The width is: ${this.width} and the heigth is : ${this.heigth}`
        }
        
        
        static isValidDimentions(a,b){
          
          return a.width * a.heigth === b.width * b.heigth;
          
        }
        
        
      }
    
    
    let square1 = new Square(5);

    let square2 = new Square(5);

    console.log(Square.isValidDimentions(square1,square2));
    
    
    
