var istatus=document.querySelector("h5")

var btn=document.querySelector("#add")
var check=0 

btn.addEventListener("click",function(){
    if(check==0){
    istatus.innerHTML="MAJOR's FRIEND"
    istatus.style.color="millatry green"
    check=1
    btn.innerHTML="Remove friend"
    }
    else{
        
    istatus.innerHTML="MAJOR"
    istatus.style.color="millatry green"
    check=0
    btn.innerHTML="Add Friend"
        
    }
})

