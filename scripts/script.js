// JavaScript Document
// opdracht van codepen
console.log("halllloooooo??!?!?!?!");

// stap 1: zoek de menu-button op en sla die op in een variabele
var deButton = document.querySelector("nav button:first-of-type");
var sluitButton = document.querySelector("nav button:nth-of-type(2)");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
deButton.onclick = toggleMenu;
sluitButton.onclick = toggleMenu;

// stap 3: voeg in de functie een class toe aan de nav
function toggleMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("nav");
  // voeg een class toe aan de nav
  // en verwijder die weer bij nogmaals klikken
  // toggle
  deNav.classList.toggle("openMenu");
}
 
/********************/
/* microinteractie */
/*******************/

