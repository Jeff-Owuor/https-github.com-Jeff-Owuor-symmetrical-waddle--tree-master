let formEl=document.querySelector(".formation");
let centuryOfBirth=document.getElementById("century");
let yearOfBirth=document.getElementById("year");
let monthOfBirth=document.getElementById("month");
let birthday=document.getElementById("day");
let gender=document.getElementById("yeah")
let maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
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
})

function checkedInputs(){
    let century=centuryOfBirth.value;
    let year=yearOfBirth.value;
    let month=monthOfBirth.value;
    let day=birthday.value;
    let genders=gender.value;
    if(century=""||century<19||century>21){
        render.innerText="Invalid input try again";
    }else if(year<0||year>99){
        render2.innerText="Invalid input try again";
    }else if(month<1||month>12){
        render3.innerText="Invalid input try again";
    }else if(day<1||day>31){
        render4.innerText="Invalid input try again";
    }
    else{
        console.log("Valid input continue")
    }
}
function nameAllocated(){

}