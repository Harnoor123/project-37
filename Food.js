class Food{
 
    constructor(x,y){
    this.image = loadImage("Milk.png")
    var lastFed;
    var foodStock;
    }

getFoodStock(){
return this.foodStock;
}

updateFoodStock(foodStock){
this.foodStock=foodStock;
}

deductFood(){
if(this.foodStock>0){
 this.foodStock=this.foodStock-1;
}
}

bedroom(){
  background(bedroomI,550,500);
}

garden(){
  background(gardenI,550,500);
}

washroom(){
  background(washroomI,550,500);
}


display(){
var x=80,y=100;

imageMode(CENTER);
//image(this.image,751,295,70,70);

if(this.foodStock!=0){
  for(var i=0;i<this.foodStock;i++){
      if(i%10==0){
      x=80;
      y=y+50;
      }
   image(this.image,x,y,50,50);
   x=x+30;
     }
   }
 }




}