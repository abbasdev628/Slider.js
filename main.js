let myphoto = [
    "photo/one.jpg",
    "photo/two.jpg",
    "photo/three.jpg"
];
let photo = document.querySelector("#slider img");
photo.src = myphoto[0]

let currentSlide = 0;
let nextBtn = document.querySelector("#slider .next");
let prevBtn = document.querySelector("#slider .prev");
nextBtn.addEventListener("click" , function() {
    currentSlide++;
    if(currentSlide>=myphoto.length){
        currentSlide = 0
    }
    photo.src = myphoto[currentSlide];
});
prevBtn.addEventListener("click" , function(){
    currentSlide --;
    if(currentSlide==-1){
        currentSlide = myphoto.length-1
    }
    photo.src = myphoto[currentSlide]
})