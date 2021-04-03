//square box which contains red(1x1),green(1x2),magenta(2x1),blue(2x2)

var img = new SimpleImage(200,200);

for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2){
    px.setRed(255);
  }
  if (y > img.getHeight()/2){
    px.setBlue(255);
  }
  else if(x >= img.getWidth()/2 && y <= img.getHeight()/2){
    px.setGreen(255);
  }
}
print (img);
//changes the pixels
