window.addEventListener("load", init);
var tomb = [1, 3, 4, 5, 6, 3];
function forEachFuggv(elem) {
    console.log(elem+" A VERZIÓ")
}
function init() {for (let index = 0; index < tomb.length; index++) {
    console.log(tomb[index]);
    
    
    
}
// A verzió
tomb.forEach(forEachFuggv);
// B verzió
tomb.forEach(function (elem) {
    console.log(elem+ " B verzió")
})}
// function init() {
//     console.log(document.getElementById("kep"))
// }
// document.getElementById("kep").addEventListener("click", function () { //névtelen fgv
//     console.log("document.getElementsById()");
// })
// nyílfügg
// document.getElementById("kep").addEventListener("click", function () { //névtelen fgv
//     console.log("document.getElementsById()");
// })
// console.log(fugg3)
// var szov = function() {
//     return "hmmm"
// }
// function ujfuggveny() {
//     return "hello"
// }
