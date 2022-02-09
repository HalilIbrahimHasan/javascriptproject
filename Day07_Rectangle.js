
    class Rectangle {
      
      
        constructor(width, heigth){
          
          this.width = width;
          this.heigth = heigth;
          
        }
        
        getArea(){
          
          return this.width * this.heigth;
          
        }
        
        toString (){
          
            return `this is the width: ${this.width} and this is the heigth: ${this.heigth}`;
          
        }
        
        
        
        
      }
  
  
  
        let rec1 = new Rectangle(4,5);
        let rec2 = new Rectangle(10,8);
  
        console.log(rec1.getArea());
        console.log(rec2.getArea());
  
  
  
  
  