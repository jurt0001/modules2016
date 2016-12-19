
document.addEventListener("DOMContentLoaded", init);

var home = document.querySelector("#home");
home.addEventListener("click", reload);

function reload(){
    
    location."http://www.christianjurt.com"();
}



let pages = []; // used to store all our screens/pages
let links = []; // used to store all our navigation links

function init() {
   console.log("Init function is working"); 
  pages = document.querySelectorAll('[data-role="page"]');

    links = document.querySelectorAll('[data-role="nav"] a');
     
    for(let i=0; i<links.length; i++) {
        links[i].addEventListener("click", navigate);
    }
    
}

function navigate(ev) {
    ev.preventDefault(); 

    let link = ev.currentTarget; 
  console.log(link);
  // split a string into an array of substrings using # as the seperator
    let id = link.href.split("#")[1]; // get the href page name
  console.log(id);
    //update what is shown in the location bar
    history.replaceState({}, "", link.href);
    
    for(let i=0; i<pages.length; i++) {
        if(pages[i].id == id){
             pages[i].classList.add("active");
        } else {
            pages[i].classList.remove("active");
        }           
    }
    
    document.querySelector("#jumbo").style.display = "none";
  document.querySelector("#paragraphs").style.display = "none";
  document.querySelector("#footer").style.display = "none";
}





