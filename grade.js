function calculate(){
   var a= parseInt(document.getElementById("sub-one").value);
   var b= parseInt(document.getElementById("sub-two").value);
   var c= parseInt(document.getElementById("sub-three").value);
   var d= parseInt(document.getElementById("sub-four").value);
   var e= parseInt(document.getElementById("sub-five").value);
   if(a>100 || b>100 || c>100 || d>100 || e>100){
    alert("Invalid values");
   }
   else{
   var obtain=a+b+c+d+e;
   document.getElementById("obtain").innerHTML=obtain;
   var per=obtain/500*100;
   document.getElementById("per").innerHTML=per;
   if(a>=40 && b>=40 && c>=40 && d>=40 && e>=40){
    document.getElementById("Re").innerHTML="<span style='color:green'>Pass</span>"
   }
   else
   {
    document.getElementById("Re").innerHTML="<span style='color:red'>Fail</span>"
   }
   if(per>=80){
      document.getElementById("Gra").innerHTML="A"
   }
   else if(per>=70){
      document.getElementById("Gra").innerHTML="B" 
   }
  else if(per>=60){
      document.getElementById("Gra").innerHTML="C" 
   }
   else if(per>=50){
      document.getElementById("Gra").innerHTML="D" 
   }
  else if(per>=40){
      document.getElementById("Gra").innerHTML="E" 
   }
   else{
      document.getElementById("Gra").innerHTML="F"
   }

}







}

