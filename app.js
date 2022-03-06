let formEl=document.querySelector(".formation");
let centuryOfBirth=document.getElementById("century");
let yearOfBirth=document.getElementById("year");
let monthOfBirth=document.getElementById("month");
let birthday=document.getElementById("day");
let gender=document.getElementById("yeah")
let maleNames={"Sunday":"Kwasi",
               "Monday":"Kwadwo",
               "Tuesday":"Kwabena",
               "Wednesday":"Kwaku",
               "Thursday":"Yaw",
               "Friday":"Kofi",
               "Saturday":"Kwame"
}
let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
let cent=(century/4)-2*century-1;
let yearCalc=5*year/4;
let another=26*(month+1)/10;
let final=(cent+yearCalc+another+day)%7;
let render=document.querySelector(".render");
let render2=document.querySelector(".render2");
let render3=document.querySelector(".render3");
let render4=document.querySelector(".render4");
formEl.addEventListener("submit",(x)=>{
        x.preventDefault();
       checkedInputs();
       nameAllocated();
})
//The following function checks valid user input
function checkedInputs(){
    let century=centuryOfBirth.value;
    let year=yearOfBirth.value;
    let month=monthOfBirth.value;
    let day=birthday.value;
    if(century=""||century<19||century>21){
        render.innerText="Invalid input try again";
    }else if(year<0||year>99){
        render2.innerText="Invalid input try again";
    }else if(month<1||month>12){
        render3.innerText="Invalid input try again";
    }else if(day==""){
        render4.innerText="Invalid input try again";
    }
    else{
        console.log("Valid input continue")
    }
}
//The function below gives a name according to the Akan naming system
function nameAllocated(){
    let genders=gender.value;
    let dayBorn=birthday.value;
    if(genders==="Male"&&dayBorn==="Sunday"){
         alert(`Your Akan name is ${maleNames.Sunday}`);
    }else if(genders==="Male"&&dayBorn==="Monday"){
        alert(`Your Akan name is ${maleNames.Monday}`);
   }else if(genders==="Male"&&dayBorn==="Tuesday"){
    alert(`Your Akan name is ${maleNames.Tuesday}`);
   }else if(genders==="Male"&&dayBorn==="Wednesday"){
    alert(`Your Akan name is ${maleNames.Wednesday}`);
   }else if(genders==="Male"&&dayBorn==="Thursday"){
    alert(`Your Akan name is ${maleNames.Thursday}`);
   }else if(genders==="Male"&&dayBorn==="Friday"){
    alert(`Your Akan name is ${maleNames.Friday}`);
   }else if(genders==="Male"&&dayBorn==="Saturday"){
    alert(`Your Akan name is ${maleNames.Saturday}`);
   }else if(genders==="Female"&&dayBorn==="Sunday"){
    alert(`Your Akan name is ${femaleNames[0]}`);
   }else if(genders==="Female"&&dayBorn==="Monday"){
    alert(`Your Akan name is ${femaleNames[1]}`);
   }else if(genders==="Female"&&dayBorn==="Tuesday"){
    alert(`Your Akan name is ${femaleNames[2]}`);
   }else if(genders==="Female"&&dayBorn==="Wednesday"){
    alert(`Your Akan name is ${femaleNames[3]}`);
   }else if(genders==="Female"&&dayBorn==="Thursday"){
    alert(`Your Akan name is ${femaleNames[4]}`);
   }else if(genders==="Female"&&dayBorn==="Friday"){
    alert(`Your Akan name is ${femaleNames[5]}`);
   }else if(genders==="Female"&&dayBorn==="Saturday"){
    alert(`Your Akan name is ${femaleNames[6]}`);
   }else{
       alert("Invalid day entry try again");
   }
}