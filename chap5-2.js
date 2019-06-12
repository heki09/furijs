let txar=document.querySelector('textarea');
let findipt=document.querySelector('#findtxt');
let repipt=document.querySelector('#reptxt');
let btn=document.querySelector('button');
let opt=document.querySelector('p');

btn.addEventListener("click",()=>{
    let findtxt=findipt.value;
    let reptxt=repipt.value;
    let txarea=txar.value;
    findtxt=new RegExp(findtxt,'g');
    opt.innerText=txarea.replace(findtxt,reptxt);

})