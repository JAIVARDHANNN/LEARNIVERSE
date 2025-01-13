window.addEventListener('scroll' , ()=>{
    document.querySelector('nav').classList.toggle('window-scroll'  , window.scrollY >0)
})

// this is the main.js file step-1 
//show/hide question 
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{

    faq.addEventListener('click' , ()=>{
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faqs__icon  i');
        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus";
        }
        else {
            icon.className = "uil uil-plus";
        }
    })
})
// this is the main.js file step-2 
//show/hide nav
const menu =document.querySelector(".nav__menu");
const menuBtn =document.querySelector("#open-menu-btn");
const closeBtn =document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click' , ()=>{

    menu.style.display = 'flex';
    closeBtn.style.display = "inline-block";
    menuBtn.style.display ='none';
})
// this is the main.js file step-3
//close nav menu
const closeNav =() =>{
    menu.style.display = 'flex';
    closeBtn.style.display = "none";
    menuBtn.style.display ='inline-block';
}

closeBtn.addEventListener('click' , closeNav)
