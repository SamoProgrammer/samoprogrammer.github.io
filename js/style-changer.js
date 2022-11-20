function changeMenuStyle() {
    const menu = document.getElementById("menu");
    const changerButton = document.getElementById("changerButton");
    const footer = document.getElementById("footer");
    // "styles/about-page.css"

    if (changerButton.innerHTML == "Full Screen") {
        menu.style.height = "100%";
        menu.style.position = "fixed";
        menu.style.bottom = "0";
        menu.style.width = "100%";
        menu.style.backgroundColor = "#2b2d42";
        footer.style.position = "initial";
        changerButton.innerHTML = "Back to normal";
    } else if (changerButton.innerHTML == "Back to normal") {
        menu.style.height = "";
        menu.style.position = "";
        menu.style.bottom = "";
        menu.style.width = "";
        menu.style.backgroundColor = "";
        footer.style.position = "";
        changerButton.innerHTML = "Full Screen";
    }

}
function chnageMenuThemeColor() {
    var changerButton = document.getElementById("themeChangerButton");
    var isRed=false;
    var styleSheet=document.querySelector("link[href='styles/main-page.css']");
    // alert(changerButton.innerHTML);
    if (isRed==false) {
        styleSheet.href = "styles/contact-page.css";
        changerButton.innerHTML = "Change Theme To blue";

    }else if(isRed){
        styleSheet.href = "styles/main-page.css";
        changerButton.innerHTML = "Change Theme To red";
        
    }
}
