const sideDrawer = document.getElementById("side-drawer");
    const menuBtn = document.querySelector(".menu-btn");
function openTheMenu(){
    
    sideDrawer.style.display="block";

    
        
}
function closeMenu(){
    sideDrawer.style.display="none";
}
menuBtn.addEventListener("click", openTheMenu);
sideDrawer.addEventListener("click", closeMenu);
