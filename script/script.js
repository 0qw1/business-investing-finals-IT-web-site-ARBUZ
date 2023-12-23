
function toShow(){ 
    let width = document.documentElement.clientWidth; 
    let height = document.documentElement.clientHeight; 
    let thisElem = document.elementFromPoint(width/2, height/4*3).closest('section') 
    if(!document.querySelector(`.${thisElem.classList[0]}`).classList.contains('isShow')){ 
        document.querySelector(`.${thisElem.classList[0]}`).classList.add('isShow') 
    } 
} 
toShow()
window.addEventListener('scroll', toShow)