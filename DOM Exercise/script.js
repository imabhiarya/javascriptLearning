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

addCssClass("fh1","fhclass")

function removeCssClassOnScroll(idname,clname) {
    let element = document.getElementById(idname);
    element.addEventListener('mouseout', () => {
        element.classList.remove(clname);
    });
};

removeCssClassOnScroll("fh1","fhclass")

function toogleThis(idname) {
    let element = document.getElementById(idname);
    element.addEventListener('click',()=>{
        element.style.visibility = "hidden"
    })
    element.addEventListener('mouseout', ()=>{
        element.style.visibility = "visible"
    })
}
toogleThis("toogleDiv");


  