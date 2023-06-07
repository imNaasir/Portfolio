
var big_wrapper = document.querySelector(".wrapper");
var button = document.querySelector(".toggle-btn");;

const changeTheme = () => {
    if(big_wrapper.classList.contains("light")){
        big_wrapper.classList.remove("light");
        big_wrapper.classList.add("dark");
    }else{
        big_wrapper.classList.add("light");
        big_wrapper.classList.remove("dark");
    }
}

button.addEventListener('click', changeTheme);


var menu = document.querySelector(".menu");
let links = document.querySelector(".links");



// menu
menu.onclick = function (){

   if(links.classList.contains("active")){
        links.style.display = "block";
        links.classList.remove('active');
        menu.style.color = "white";
            
   }else{
    links.classList.add("active");
   }

        
}
