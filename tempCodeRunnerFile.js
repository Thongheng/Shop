const nav_bar = document.querySelector("nav-bar");

window.addEventListener ("scroll", function(){
    nav_bar.classList.toggle ("sticky", this.window.scrollY > 0);
})