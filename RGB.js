// giving a graphic look to the image
var img=new SimpleImage("hilton.jpg"); // importing the image

print(img); //Actual Image
print('width',img.getWidth()); //width of the image
print('height',img.getHeight()); //height of the image

var width = img.getWidth(); // declaration
for(var pixel of img.values()){ //loop
if(pixel.getX() <= (width/3)){
    pixel.setRed(255);
}

if(pixel.getX() > (width/3) && pixel.getX() <= (width * 2/3)){
    pixel.setGreen(255);
}

if(pixel.getX() <= (width * 2/3)){
    pixel.setBlue(255);
}
}
print(img); // Result image
