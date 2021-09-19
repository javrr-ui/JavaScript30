// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");

document.body.appendChild(highlight);

triggers.forEach(a=>{
    a.addEventListener("mouseenter",highlightLink);
})


function highlightLink(){
    console.log("Highlight!!")
}