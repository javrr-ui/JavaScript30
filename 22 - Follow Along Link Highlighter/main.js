// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");

document.body.appendChild(highlight);

triggers.forEach(a=>{
    a.addEventListener("mouseenter",highlightLink);
})


function highlightLink(){
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);

    highlight.style.width = `${linkCoords.width}px`;
    highlight.style.height = `${linkCoords.height}px`;
}