const burger = document.querySelector('.nav-icon')
const navContainer = document.querySelector('.navlist-conatiner')
const menuSpan = document.getElementById('#menu-span')
const modeBtn= document.querySelector('.mode-btn')
const body= document.querySelector('body')
const modeSpan= document.getElementById('#mode-span')
const anchor = document.querySelectorAll('.anchor-tag')
const navbtn = document.querySelector('.top')
let projectPage = document.querySelector('.project')
const btn = document.querySelectorAll('button')




function clearnav(){
  
  
  anchor.forEach(function(tag){
  tag.addEventListener('click',function(){
    navContainer.classList.remove('display-nav')
    menuSpan.innerHTML = 'menu'
    

  })
})
}

clearnav()


// modeBtn.addEventListener('click',function(){
//  body.classList.toggle ('light-mode')
//  modeSpan.innerHTML='light_mode'
//  })

burger.addEventListener('click',function(){
 
  
    navContainer.classList.toggle('display-nav')
  

  if(menuSpan.innerHTML === 'menu' || navContainer.classList.contains('display-nav')){
    menuSpan.innerHTML='close'
  
   }
else{
    
    menuSpan.innerHTML='menu'
}


})




let aboutmeheight =document.querySelector('.about').clientHeight
let about=document.querySelector('.about')
let contact =document.getElementById('contact')
let contactheight =document.getElementById('contact').clientHeight



window.addEventListener('scroll',function(){
  
  let currentScrollPosition = window.scrollY;
  if(currentScrollPosition>aboutmeheight){
     navbtn.style.display ='block'
  }
  else{
    navbtn.style.display ='none'
  }
if (aboutmeheight.clientHeight = currentScrollPosition){
  about.classList.add('animated2')
}

})




const hero =document.querySelector('.hero')
const workText = document.querySelector('.work-text')

window.addEventListener('load', function(){
  setTimeout(function(){

hero.classList.add('animated')
  }, 100)

})




