let switchToggle = document.querySelector(".switch-toggle");
let body = document.querySelector("body");
let checkbox = document.getElementById("switch");

switchToggle.addEventListener("click", function(){
    if(checkbox.checked == true){
        body.removeAttribute("theme")
    }else{
        body.setAttribute("theme", "dark")  
    }
})