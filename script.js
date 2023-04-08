window.addEventListener("scroll", myFunction);

let head = document.getElementById("header");
function myFunction() {
    if (window.pageYOffset > 350 && window.pageYOffset <400) {
        
        document.getElementById("txt-img").classList.add("first")


    }
    else if(window.pageYOffset <350 && window.pageYOffset >250){
        document.getElementById("txt-img").classList.add("sec")
        document.getElementById("txt-img").classList.remove("first")
        

    }
   

    else if (window.pageYOffset > 50 && window.pageYOffset <100) {
        head.style.background = "white"
        head.style.top = "0px"
        head.style.zIndex = 0;
        document.getElementById("txt-img").classList.remove("sec")
        
        


    }

}






