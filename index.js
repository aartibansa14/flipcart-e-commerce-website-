let flag=0
showslide(flag);
function go(x)
{
 flag=flag+x;
 showslide(flag);
}

function showslide(num){
    let slides=document.getElementsByClassName('slide');
    if(num<0)
    {
       
        flag=slides.length-1;
        num=slides.length-1;
    }

   if(num==slides.length)
   {
    flag=0;
    num=0;
   }
    for(let i=0;i<slides.length;i++)
    {
        slides[i].style.display='none';
    }

    slides[num].style.display='block';
}


