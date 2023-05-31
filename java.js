

    const nav_container= document.getElementById('nav_container'),
full_menu= document.getElementById('full_menu'),
close_menu= document.getElementById('close_menu')

if(full_menu){
    full_menu.addEventListener('click',() =>{
        nav_container.classList.add('show-menu')
    })
}

if(close_menu){
    close_menu.addEventListener('click',() =>{
        nav_container.classList.remove('show-menu')
    })
}
const navlink = document.querySelectorAll('.link')
function linkaction(){
   const nav_container=document.getElementById('nav_container')
    nav_container.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click',linkaction));


const modalviews= document.querySelectorAll('.services_modal'),
modalbtn=document.querySelectorAll('.button_icon'),
modalclose=document.querySelectorAll('.services_modal-close')

let modal=function(modalclick){
    modalviews[modalclick].classList.add('active-modal')

}

modalbtn.forEach((modalbtn,i)=>{
    modalbtn.addEventListener('click',()=>{
        modal(i)
    })

})

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__container a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__container a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)