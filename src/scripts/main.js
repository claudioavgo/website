var myVar;
var r = document.querySelector(':root');
var actived = 0;


function loader() {
  myVar = setTimeout(showPage, 600);
}

function showPage() {
  document.getElementById("loading").style.display = "block";
  document.getElementById("loader").style.display = "none";
  document.getElementById("loading-clear").style.display = "none";
}

function darkmode() {
    if (actived === 0) {
        document.getElementById("dark-mode-btn").classList="btn-menu-darkmode far fa-moon";
        r.style.setProperty('--main', '#dadada');
        r.style.setProperty('--color-light', '#111518');
        r.style.setProperty('--color-gray', '#242d33');
        r.style.setProperty('--color-dark', '#B2BECD');
        actived = 1;
    }
    else if (actived === 1) {
        document.getElementById("dark-mode-btn").classList="btn-menu-darkmode fas fa-moon";
        r.style.setProperty('--main', '#111518');
        r.style.setProperty('--color-light', '#dadada');
        r.style.setProperty('--color-gray', '#B2BECD');
        r.style.setProperty('--color-dark', '#242d33');
        actived = 0;
    }
}

document.addEventListener("");