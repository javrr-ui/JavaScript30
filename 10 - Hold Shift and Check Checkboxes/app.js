const checkboxes =  document.querySelectorAll(`.inbox input[type="checkbox"]`);
console.log(checkboxes);

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", handleCheck);
});


let lastChecked;

function handleCheck(e){

    let inBetween = false;

    console.log(e)
    if(e.shiftKey && this.checked){

        checkboxes.forEach(checkbox => {

            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }
            console.log(checkbox);

            if(inBetween){
                checkbox.checked = true;
            }

        })
    }
    lastChecked = this;
}