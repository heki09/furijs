let ipt=document.querySelector('input');
let elem=document.querySelector('p');
let btn=document.querySelector('button');
btn.addEventListener('click',()=>{
    elem.innerText=ipt.value;
})
