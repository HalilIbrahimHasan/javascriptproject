     
class Rectangle {

    //setup
constructor(width, heigth){

console.log("Regtangle class generated");

this.width = width;
this.heigth = heigth;


}

getArea(){

return this.width * this.heigth;
}

toString(){

return `This is a rectangle of ${this.width} X ${this.heigth} !` ;
}


}

let rectangle1 = new Rectangle(4,5);
let rectangle2 = new Rectangle(5,6);

  console.log(rectangle1.toString());

   
    
    
    