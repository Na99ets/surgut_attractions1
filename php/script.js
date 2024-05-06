let buttons = document.querySelectorAll(".button");

for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index].addEventListener("click", (e)=>{
        e.preventDefault();
        let overlay = document.createElement('span')
        overlay.classList.add("overlay");
        let x = e.clientX - e.target.offsetLeft -150;
        let y = e.clientY - e.target.offsetTop;
        overlay.style.left = x + "px";
        overlay.style.top = y + "px";
        e.target.appendChild(overlay);
        setTimeout(()=>{
            overlay.remove();
        }, 500);
        console.log(e);
    });
}