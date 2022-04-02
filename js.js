/*
elem.style.backroundColor = "red";
elem.className = "irni"
elem.classList.add = "irni"
*/

window.addEventListener("load", init)
var tomb = [];
function $(elem) {
    return document.querySelectorAll(elem)
}
function kattintas() {  
    
    tomb.push(event.target.src);
    console.log(tomb);

    //event.target.removeEventListener("click", kattintas)
    event.target.style.display="none";
    var akktKep="<img src='"+event.target.src+"' alt='' >";
    document.querySelectorAll("#csonak")[0].innerHTML+=akktKep;
    
    
    document.querySelectorAll("#csonak img").forEach(function (event) {
        event.addEventListener("mouseover", function (event) {
            event.target.className="kiemel";
        });
        event.addEventListener("mouseout", function (event) {
            event.target.className="";
        });
    });
    
    
    // for (let index = 0; index < document.querySelectorAll("#csonak img").length; index++) {
    //     document.querySelectorAll("#csonak img")[index].addEventListener("mouseover", function (event) {
    //         event.target.className="kiemel";
    //     });
    //     document.querySelectorAll("#csonak img")[index].addEventListener("mouseout", function (event) {
    //         event.target.className="";
    //     });
    // }
    
}
// function foleVisz() {
//     event.target.className="kiemel"
// }
// function leVisz() {
//     event.target.className=""
// }
function init() {
    var pElem = document.querySelectorAll("footer p")[0];
    pElem.innerHTML="Paulusz Kristóf";
    pElem.style.textAlign="center";
    pElem.style.fontSize="20px";
    var kepTomb = $("#bal img")
       
    kepTomb.forEach(function (event) {
        event.addEventListener("click", kattintas);

        event.addEventListener("mouseover", function (event) {
            event.target.className="kiemel";
        })
        event.addEventListener("mouseout", function (event) {
            event.target.className="";
        })
    });
    
    // for (let index = 0; index < kepTomb.length; index++) {
    
    // kepTomb[index].addEventListener("click", kattintas);
    
    // kepTomb[index].addEventListener("mouseover", function (event) {
    //     event.target.className="kiemel";
    // })
    // kepTomb[index].addEventListener("mouseout", function (event) {
    //     event.target.className="";
    // })

    // }
       
    
    }
