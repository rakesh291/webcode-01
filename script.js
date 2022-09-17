var div=document.createElement("div")
div.style.textAlign="center";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","name");
input.setAttribute("placeholder","type name here(EX:mike)");

var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="search";
button.addEventListener("click",DATA);

let nationality=document.createElement("div");
nationality.setAttribute("id","nationality");
let para=document.createElement("p");
para.setAttribute("id","para");
para.innerHTML="PLEASE TELL ME YOUR NAME,I WILL TELL YOUR NATIONALITY"

div.append(input,button,nationality,para);
document.body.append(div);

async function DATA(){
    try{
    let res=document.getElementById("name").value;
    var url=`https://api.nationalize.io/?name=${res}`;

    let result=await fetch(url)
    let result1=await result.json();
    // console.log(result1)
    // console.log(typeof(result1))
    for(i=0;i<2;i++){
        console.log(result1.country[i].country_id)
        console.log(result1.country[i].probability)
nationality.innerHTML=`<div class="card">
<div class="card-body">
NAME:<mark>${res}</mark><br>COUNTRY NAME1:${result1.country[0].country_id}  <br>PROBABILITY:${result1.country[0].probability}<br> COUNTRY NAME2:${result1.country[1].country_id}   <br>PROBABILITY:${result1.country[1].probability}
</div>
</div>
  `

    }
}
    catch(error){
        console.log("Enter the valid name");
    }
   
}
DATA()

