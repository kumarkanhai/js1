var btn=document.querySelector('button');
var text = document.querySelector('h3');
let count = 0;

btn.addEventListener('click',function(){
    if(count===0){
        text.innerHTML='Friends';
        text.style.color='green';
        btn.innerHTML='Remove';
        count = 1;
    }
    else{
        text.innerHTML='Stranger';
        text.style.color='Red';
        btn.innerHTML='Add Friends &#x2764';
        count = 0;
    }
})