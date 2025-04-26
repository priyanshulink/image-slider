const img = ["img.jpg", "img1.jpg", "img2.jpg", "img3.jpg"];
let currentIndex = 0;

function showImage(index){
    const imgTag = document.getElementById("slider-image")
    imgTag.src = img[index];
}
function nextSlide(){
    currentIndex++;
    if(currentIndex>=img.length){
        currentIndex = 0;
    }
    showImage(currentIndex);
}
function prevSlide(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex = img.length-1;
    }
    showImage(currentIndex);
}