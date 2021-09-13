let elAnswer = document.getElementById('answer');
let elForm = document.getElementById ('form');
let elTempInput = document.getElementById('tempinput');
let elRain = document.getElementById('rain');
let elFitness = document.getElementById('fitness');


elTempInput.addEventListener('keyup', function(e){
   e.preventDefault();
   if(!isNaN (elTempInput.value)){
      if(elTempInput.value >= 5 && elTempInput.value <=30){
         elAnswer.textContent = 'Ha :)' ;
         elAnswer.classList.remove('no__mode')  
         elAnswer.classList.add('yes__mode');
      }
      else{
         elAnswer.textContent = 'Yo\'q :('  ;
         elAnswer.classList.remove('yes__mode');
         elAnswer.classList.add('no__mode') ;
      }
   }else{
      elAnswer.textContent = 'Harorat kiriting'
   }
})
elRain.addEventListener('click', function(){
   if (elRain.checked && (elTempInput.value >= 5 && elTempInput.value <=30)){
      elAnswer.textContent = 'Yo\'q';  
      elAnswer.classList.remove('yes__mode');
      elAnswer.classList.add('no__mode') 
   }else if(elRain.checked ){
      elAnswer.textContent = 'Yo\'q' ;
      elAnswer.classList.remove('yes__mode');
      elAnswer.classList.add('no__mode') 
   }else{
      elAnswer.textContent = ''
   }
})
elFitness.addEventListener('click', function(){
   if (elFitness.checked && elRain.checked){
      elAnswer.textContent = 'Ha' ;
      elAnswer.classList.remove('no__mode')  
      elAnswer.classList.add('yes__mode') 
   }
   else if(elFitness.checked){
      elAnswer.textContent = 'Ha';
      elAnswer.classList.remove('no__mode')  
      elAnswer.classList.add('yes__mode')
   }
   else if(elFitness.checked && elTempInput.value < 5){
      elAnswer.textContent = 'Yo\'q';
      elAnswer.classList.remove('yes__mode');
      elAnswer.classList.add('no__mode')  
   }
   else{
      elAnswer.textContent = 'Ha'  ;
      elAnswer.classList.remove('no__mode')  
      elAnswer.classList.add('yes__mode')
   }
})