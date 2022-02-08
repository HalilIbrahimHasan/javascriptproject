class Square {


    constructor(width){

        this.width = width;
        this.heigth = width;
    }


    get area(){

        return this.width * this.heigth;
    }

    toString(){
        return `This is a square of ${this.width} and ${this.heigth}`;
    }
  
  static validDimentions(a,b){
    
    return a.width * a.heigth  === b.width * b.heigth;
  }


}

let square1 = new Square(5);

console.log(square1);
console.log(square1);
let square2 = new Square(5);
  console.log(Square.validDimentions(square1, square2));


        
        
        