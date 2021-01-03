let slides=document.querySelector('.slider-items').children;
let slidesText=document.querySelector('.slider-texts').children;
let nextSlide=document.querySelector(".right-slide");
let prevSlide=document.querySelector(".left-slide");
let totalSlides=slides.length;
let index=0;

nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

function next(direction){

   if(direction=="next"){ 
    index++;
       if(index==totalSlides){
        index=0;
       }
   } 
   else{
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
          slidesText[i].classList.remove("active");
  }
  slides[index].classList.add("active");  
  slidesText[index].classList.add("active");
  
}


function onClickMenu(){
     document.getElementById("hamburger").classList.toggle("change");
     document.getElementById("burger-nav").classList.toggle("change");
     document.getElementById("overlay").classList.toggle("change");
	
}
