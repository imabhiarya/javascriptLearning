let firstButton = document.getElementById('firstBtn');
firstButton.addEventListener('click',function channgeTxt(params) {
    firstButton.innerText = "Kaise Ho?";
});

function addCssClass(id1,clname) {
    let elm = document.getElementById(id1)
    elm.addEventListener('mouseover',()=>{
        elm.classList.add(clname)
    });
}
addCssClass("firstBtn","fhclass")


  