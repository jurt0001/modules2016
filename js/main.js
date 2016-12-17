document.addEventListener("DOMContentLoaded", modal);

function modal(ev){   
    
let pages = []; // used to store all our screens/pages
let links = []; // used to store all our navigation links    
    
for(let i=0; i<links.length; i++) {
        links[i].addEventListener("click", navigate);
    }
                          
document.getElementById("btnOpen").addEventListener("click", function(){;

   
                                                                        ev.preventDefault();
  /* if the button was a submit button we need to stop the form submitting */

  document.querySelector(".overlay").style.display = "block";
  document.querySelector(".modal").style.display = "block";
                                                                        
                                                                        
 let originalSVG = document.querySelector("section.template svg");
  let container = document.querySelector("#icons");
                                                                        
                                                                        
                                                                        
//  for(let i=0; i<15; i++){
                                                                        
      let weekx = document.createElement("div"); 
      let weekXA = document.createElement("a");
        weekx.appendChild(weekXA);                                                                 
        weekXA.className = "weekx";
        weekXA.id = "btnCloseX";  
        document.getElementById("btnCloseX").addEventListener("click", btnClose);                                                                
        weekXA.setAttribute("href", "#mWeekx");                                                           
        container.appendChild(weekx);
                                                                        
                                                                        
                                                                        
     let week1 = document.createElement("div"); 
     let week1A = document.createElement("a");    
        week1.appendChild(week1A);                                                                    
        week1A.className = "week1";
        week1A.id = "btnClose1";
        document.getElementById("btnClose1").addEventListener("click", btnClose);                                                                
        week1A.setAttribute("href", "#mWeek1");                                                               
        container.appendChild(week1); 
                                                                        
                                                                        
     let week2 = document.createElement("div");
     let week2A = document.createElement("a"); 
        week2.appendChild(week2A);                                                                 
        week2A.className = "week2";
        week2A.id = "btnClose2";                                                                
        document.getElementById("btnClose2").addEventListener("click", btnClose);                        
        week2A.setAttribute("href", "#mWeek2");                                                                
        container.appendChild(week2);                                                                   
                                                                        
     let week3 = document.createElement("div");
     let week3A = document.createElement("a");
        week3.appendChild(week3A);                                                                 
        week3A.className = "week3";
        week3A.id = "btnClose3";                                                                
        document.getElementById("btnClose3").addEventListener("click", btnClose);                                                                
        week3A.setAttribute("href", "#mWeek3");                                                                 
        container.appendChild(week3);
                                                                        
     let week4 = document.createElement("div");
     let week4A = document.createElement("a");
        week4.appendChild(week4A);                                                                 
        week4A.className = "week4";
        week4A.id = "btnClose4";                                                                
        document.getElementById("btnClose4").addEventListener("click", btnClose);                                                                
        week4A.setAttribute("href", "#mWeek4");                                                                
        container.appendChild(week4);  
                                                                        
     let week5 = document.createElement("div"); 
     let week5A = document.createElement("a"); 
        week5.appendChild(week5A);                                                                    
        week5A.className = "week5";
        week5A.id = "btnClose5";                                                                
        document.getElementById("btnClose5").addEventListener("click", btnClose);                                                                
        week5A.setAttribute("href", "#mWeek5");                                                                
        container.appendChild(week5);
                                                                        
     let week6 = document.createElement("div"); 
     let week6A = document.createElement("a"); 
        week6.appendChild(week6A);                                                                 
        week6A.className = "week6"; 
        week6A.id = "btnClose6";                                                                
        document.getElementById("btnClose6").addEventListener("click", btnClose);                                                                
        week6A.setAttribute("href", "#mWeek6");                                                                
        container.appendChild(week6);
                                                                        
     let week7 = document.createElement("div"); 
     let week7A = document.createElement("a");
        week7.appendChild(week7A);                                                                 
        week7A.className = "week7"; 
        week7A.id = "btnClose7";                                                                
        document.getElementById("btnClose7").addEventListener("click", btnClose);                                                                
        week7A.setAttribute("href", "#mWeek7");                                                                
        container.appendChild(week7); 
                                                                        
     let week8 = document.createElement("div"); 
     let week8A = document.createElement("a"); 
        week8.appendChild(week8A);                                                                  
        week8A.className = "week8";
        week8A.id = "btnClose8";                                                                
        document.getElementById("btnClose8").addEventListener("click", btnClose);                                                                
        week8A.setAttribute("href", "#mWeek8");                                                                
        container.appendChild(week8); 
                                                                        
     let week9 = document.createElement("div");
     let week9A = document.createElement("a");  
        week9.appendChild(week9A);                                                                 
        week9A.className = "week9";
        week9A.id = "btnClose9";                                                                
        document.getElementById("btnClose9").addEventListener("click", btnClose);                                                     
        week9A.setAttribute("href", "#mWeek9");                                                                
        container.appendChild(week9); 
                                                                        
     let week10 = document.createElement("div");
     let week10A = document.createElement("a"); 
        week10.appendChild(week10A);                                                                 
        week10A.className = "week10";
        week10A.id = "btnClose10";                                                                
        document.getElementById("btnClose10").addEventListener("click", btnClose);                                                                
        week10A.setAttribute("href", "#mWeek10");                                                                
        container.appendChild(week10); 
                                                                        
     let week11 = document.createElement("div");
     let week11A = document.createElement("a"); 
        week11.appendChild(week11A);                                                                 
        week11A.className = "week11";
        week11A.id = "btnClose11";                                                                
        document.getElementById("btnClose11").addEventListener("click", btnClose);                                                                
        week11A.setAttribute("href", "#mWeek11");                                                                
        container.appendChild(week11); 
                                                                        
     let week12 = document.createElement("div"); 
     let week12A = document.createElement("a");  
        week12.appendChild(week12A);                                                                 
        week12A.className = "week12";
        week12A.id = "btnClose12";                                                                
        document.getElementById("btnClose12").addEventListener("click", btnClose);                                                                
        week12A.setAttribute("href", "#mWeek12");                                                                
        container.appendChild(week12); 
                                                                        
     let week13 = document.createElement("div");
     let week13A = document.createElement("a");
        week13.appendChild(week13A);                                                                 
        week13A.className = "week13";
        week13A.id = "btnClose13";                                                                
        document.getElementById("btnClose13").addEventListener("click", btnClose);                                                                                                                               
        week13A.setAttribute("href", "#mWeek13");                                                                
        container.appendChild(week13);
                                                                        
     let week14 = document.createElement("div");
     let week14A = document.createElement("a"); 
        week14.appendChild(week14A); 
        week14A.className = "week14";
        week14A.id = "btnClose14";                                                                
        document.getElementById("btnClose14").addEventListener("click", btnClose);                                                                
        week14A.setAttribute("href", "#mWeek14");                                                                
        container.appendChild(week14);
                                                                        
     
     let copySVGx = originalSVG.cloneNode(true);                                                                   
    let copySVG1 = originalSVG.cloneNode(true);
     let copySVG2 = originalSVG.cloneNode(true);
   let copySVG3 = originalSVG.cloneNode(true);
   let copySVG4 = originalSVG.cloneNode(true);                                                                   let copySVG5 = originalSVG.cloneNode(true);
     let copySVG6 = originalSVG.cloneNode(true);
   let copySVG7 = originalSVG.cloneNode(true);
   let copySVG8 = originalSVG.cloneNode(true);   
   let copySVG9 = originalSVG.cloneNode(true);
   let copySVG10 = originalSVG.cloneNode(true);
   let copySVG11 = originalSVG.cloneNode(true);
   let copySVG12 = originalSVG.cloneNode(true);                                                                      let copySVG13 = originalSVG.cloneNode(true);                                                                     let copySVG14 = originalSVG.cloneNode(true);                                                                      
    
   
                                                                        
                                                                        
           document.getElementById("btnClose").addEventListener("click", btnClose);                                                                     
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
//    let modal = document.querySelector("modal");
    
                                                                        
    weekXA.appendChild(copySVGx);                                                                    
    week1A.appendChild(copySVG1);
    week2A.appendChild(copySVG2);
    week3A.appendChild(copySVG3);                                                                    
    week4A.appendChild(copySVG4);                                                                    
    week5A.appendChild(copySVG5);                                                                    
    week6A.appendChild(copySVG6);                                                                    
    week7A.appendChild(copySVG7);                                                                    
    week8A.appendChild(copySVG8);                                                                    
    week9A.appendChild(copySVG9);
    week10A.appendChild(copySVG10);                                                                    
    week11A.appendChild(copySVG11);                                                                    
    week12A.appendChild(copySVG12);                                                                    
    week13A.appendChild(copySVG13);                                                                    
    week14A.appendChild(copySVG14);                                                                    
                                                                        
                                                                        
//  }                                                                       
  
});

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
    

    
}


function btnClose(){
    document.querySelector("[data-role=modal]").style.display="none";
    document.querySelector("[data-role=overlay]").style.display="none";
    
}
