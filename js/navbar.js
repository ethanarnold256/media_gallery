hamburgerButton = document.getElementById("hamburger");
hamburgerMenu = document.getElementById("hideable")

function toggleMenu(){
    if(hamburgerMenu.style.display == "none") {
        hamburgerMenu.style.display = "block";
        hamburgerButton.src = "img/icons/cross.svg";
    } else {
        hamburgerMenu.style.display = "none";
        hamburgerButton.src = "img/icons/hamburger.svg";
    }
}

hamburgerButton.onclick = function(){toggleMenu();};