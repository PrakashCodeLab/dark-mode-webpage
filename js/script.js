const btn=document.querySelector('.btn');

const toggleicon=document.querySelector('.bi-brightness-high-fill');

const body=document.querySelector('body')

btn.addEventListener('click',function(){
     toggleicon.classList.toggle('bi-moon-fill');
    
 if (toggleicon.classList.contains('bi-moon-fill')){
      
       body.style.backgroundColor="black";
       body.style.color="#718093"
       body.style.transition="2s"
       
        
    }else{
        body.style.backgroundColor="white";
       body.style.color="black"
       body.style.transition="2s"
        
        
        
    }
    
    
})


