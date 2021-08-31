const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click",toggleOpen);
})
panels.forEach(panel => {
    panel.addEventListener("transitionend",toggleActive);
})

function toggleOpen(){
    
    panels.forEach(panel =>{
        
        panel.classList.remove("open");
    })

    if(this.className.includes("open")){
        this.classList.remove("open");
    }else{
        this.classList.add("open");
    }
}

function toggleActive(e){
    if(e.propertyName.includes("flex")){
        this.classList.toggle("open-active");
    }
}