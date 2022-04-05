    let menubar =document.getElementById("menubar")
    let list =document.getElementById("display")
    const menus = () =>{
        list.classList.toggle("block")
    }

    
let count =2;

function call(x){
    count =count+x;
    sildeshow(count);
}
function sildeshow(num){
    let r =document.getElementsByClassName("nyhedsbrev-contain");
 
    if(num==r.length){
        count=0;
        num=0;
    }
    if (num<0){
        count =r.length-1;
        num =r.length-1;
    }
    for(let d of r) {
        d.style.display="none";
    }
    
    r[num].style.display="block";

}    
