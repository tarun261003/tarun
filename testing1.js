let count=0;
document.getElementById("submitbtn").onclick =function()
{
   if(count%2==0){
        count+=1;
        document.getElementById("myLabel").innerHTML="Changing Background...";
        document.getElementByid("body1").style.backgroundColor="black";
        document.getElementById("submitbtn").style.backgroundColor="white";
        document.getElementById("submitbtn").style.textDecorationColor="black";
        document.getElementById("myLabel").innerHTML="done";
   }
   else{
        count+=1;
        document.getElementById("myLabel").innerHTML="Changing Background...";
        document.getElementByid("body1").style.backgroundColor="white";
        document.getElementById("submitbtn").style.backgroundColor="black";
        document.getElementById("submitbtn").style.textDecorationColor="white";
        document.getElementById("myLabel").innerHTML="done";
   }
}