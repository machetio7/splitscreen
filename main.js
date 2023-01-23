let leftSide = document.getElementById('left-side');
let arrowRight = document.getElementById('arrows');
let description = document.getElementById('description');

setTimeout(() => {
    leftSide.classList.add('hidden');
    arrowRight.classList.add('ri-arrow-right-circle-fill');    
    description.classList.add("hiddenDescription");
}, 1000);

document.getElementById('arrows').addEventListener('click',()=>{
    if(arrowRight.classList.contains('ri-arrow-right-circle-fill')){
        leftSide.classList.remove('hidden');
        arrowRight.classList.remove('ri-arrow-right-circle-fill');
        setTimeout(() => {
            description.classList.remove("hiddenDescription");
        }, 1000);
        return;
    }
    arrowRight.classList.add('ri-arrow-right-circle-fill');
    leftSide.classList.add('hidden');
    description.classList.add("hiddenDescription");
    
});

