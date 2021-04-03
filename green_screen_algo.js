//green screen algorithm (merging the two images using green screen algorithm)

var fgImage = new SimpleImage('drewRobert.png');
var bgImage = new SimpleImage('dinos.png');

var answer = new SimpleImage(fgImage.getWidth(),fgImage.getHeight());

for(var pixel of fgImage.values()){
    if(pixel.getGreen()  >=  pixel.getRed()  + pixel.getBlue()){
        var x = pixel.getX();
        var y = pixel.getY();
        var bgpixel = bgImage.getPixel(x, y);
        answer.setPixel(x, y, bgpixel);   
    }

else{
    answer.setPixel(pixel.getX(), pixel.getY(), pixel);
}
}
print(answer);
