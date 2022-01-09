var myVar;
var check = 0;
var active = 0;

function myFunction() {
  myVar = setTimeout(showPage, 500);
  document.getElementById("body").classList="tran";
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mostrar").style.display = "block";
}

function change() {
  if (check === 0) {
    document.getElementById("body").style.background="#B2BECD";
    document.getElementById("moon-icon").classList="far fa-moon";
    document.getElementById("text-main").style.color="#111518";
    document.getElementById("text-sub").style.color="#242d33";
    document.getElementById("text-sub-x").style.color="#dadada";
    document.getElementById("square").style.borderColor="#dadada";
    document.getElementById("linea").style.borderTop="3px solid #dadada";
    document.getElementById("dark").style.color="#242d33";
    document.getElementById("white").style.color="#B2BECD";
    document.getElementById("whitex").style.color="#111518";
    document.getElementById("py").style.color="#242d33";
    document.getElementById("css").style.color="#242d33";
    document.getElementById("html").style.color="#242d33";
    document.getElementById("js").style.color="#242d33";
    document.getElementById("git").style.color="#dadada";
    document.getElementById("env").style.color="#dadada";
    document.getElementById("inst").style.color="#dadada";
    document.getElementById("twi").style.color="#dadada";
    document.getElementById("hamburger-icon").style.color="#242d33";
    check = 1;
  }
  else if (check === 1) {
    document.getElementById("body").style.background="#111518";
    document.getElementById("hamburger-icon").style.color="#B2BECD";
    document.getElementById("moon-icon").classList="fas fa-moon";
    document.getElementById("text-main").style.color="#dadada";
    document.getElementById("text-sub").style.color="#B2BECD";
    document.getElementById("text-sub-x").style.color="#dadada";
    document.getElementById("linea").style.borderTop="3px solid #242d33";
    document.getElementById("square").style.borderColor="#242d33";
    document.getElementById("dark").style.color="#B2BECD";
    document.getElementById("white").style.color="#111518";
    document.getElementById("whitex").style.color="#B2BECD";
    document.getElementById("py").style.color="#B2BECD";
    document.getElementById("css").style.color="#B2BECD";
    document.getElementById("html").style.color="#B2BECD";
    document.getElementById("js").style.color="#B2BECD";
    document.getElementById("git").style.color="#242d33";
    document.getElementById("env").style.color="#242d33";
    document.getElementById("inst").style.color="#242d33";
    document.getElementById("twi").style.color="#242d33";
    
    check = 0;
  }
}

function hamburger() {
  

  if (active === 0) {
    document.getElementById("menu").style.visibility="visible";
    document.getElementById("menu").style.overflow="visible";
    document.getElementById("menu-txt").classList="shown";
    document.getElementById("hamburger-icon").style.position="fixed";
    document.getElementById("mostrar").style.display = "none";
    active = 1;
  }
  else if (active === 1) {
    document.getElementById("menu").style.visibility="hidden";
    document.getElementById("menu").style.overflow="hidden";
    document.getElementById("menu-txt").classList="hidden";
    document.getElementById("hamburger-icon").style.position="absolute";
    document.getElementById("mostrar").style.display = "block";
    active = 0;
  }
}

