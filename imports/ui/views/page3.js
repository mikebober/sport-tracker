var images = ["trolltunga.jpg", "10-dithering-opt.jpg", "tul-14-yulman-hdr.jpg"];
var caption = ["cation for slide1", "cation for slide2", "cation for slide3"];

var imageNumber = 0;
var imageLength = images.length -1;

function changeImage(x) {
    imageNumber += x;
    //starts slide show over if end is reached
    if(imageNumber > ImageLength) {
        imageNumber = 0;
    }
    if(imageNumber < 0) {
        imageNumber = imageLength;
    }

    document.getElemntById("slideshow").src= images[imageNumber];
    document.getElemntById('caption').innerHTML = caption[imageNumber];
    return false;
}
