function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





const textSpan = document.querySelector(".txt-type");


const textArray=["DIRECTOR OF" ,"DOER TECHNOLOGIES" ];
const typingDelay=130;
const erasingDelay=100;
const nextTextDelay=1500;
let textArrayIndex=0;
let charIndex=0;

   function type(){
       if(charIndex < textArray[textArrayIndex].length){
           textSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
           charIndex++;
           setTimeout(type , typingDelay);
       }
       else{
        setTimeout(erase , nextTextDelay);
       }
   }

   function erase(){
       if( charIndex > 0){
        textSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
       }
       else{
           textArrayIndex++;
           if(textArrayIndex >= textArray.length) textArrayIndex=0;
           setTimeout(type, typingDelay + 1100);
       }
   }

 
   document.addEventListener("DOMContentLoaded", function(){
    setTimeout(type , nextTextDelay + 100);
   });

   AOS.init({
    easing:'ease',
    duration:1800
});