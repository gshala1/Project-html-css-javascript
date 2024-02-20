const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    const p = box.querySelector("#para");
    const arrow = box.querySelector(".svg1"); 

    box.addEventListener("click", () => {
        if (box.classList.contains('active')) {
            box.classList.remove('active');
            p.style.display = "none";
            arrow.classList.remove('arrow-active');
        } else {
            box.classList.add('active');
            p.style.display = "block";
            
            arrow.classList.add('arrow-active');
        }
    });
});



