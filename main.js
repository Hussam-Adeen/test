let btn = document.querySelector('.button');
let btn2 = document.querySelector('.button2');
let up = document.querySelector('.up')
let u = document.querySelector('.u')




document.querySelector('.sign').onclick = function() {
 location.href ='/#grid'; behavior: 'smooth'
}

window.onscroll = function() {
 
 if (window.scrollY >= 200){
  up.style.cssText= 'display: block'
 }
  else{
 up.style.cssText= 'display: none'
  }
}
 up.onclick = function() {
  scrollTo({
   top:0 , behavior: 'smooth'
  })
 }

btn.onclick = function() {
 this.classList.add('clicked')
}
btn.onblur = function() {
 this.classList.remove('clicked')
}
btn2.onclick = function() {
 this.classList.add('clicked')
}
btn2.onblur = function() {
 this.classList.remove('clicked')
}
