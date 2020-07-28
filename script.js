const clickElement_Wrapper = document.querySelector("#main-wrapper");
const resoult = document.querySelector("#resoult");
const allInputs = document.querySelectorAll(".inp-style");



let mainClick = (event) => {
   let sumOfInpValue = 0;
if(event.type === "click") {
   if(event.target.parentElement.classList.contains("btn-inp-wrapper")){
      let parElem = event.target.parentElement;
      let inpElement = parElem.querySelector(".inp-style");
         if (event.target.classList.contains("btn-style")){
            if (event.target.classList.contains("active")){
               event.target.classList.remove("active");
               document.querySelector(".container").click();
               inpElement.value = "";
            }else{
               event.target.classList.add("active");
               inpElement.focus();
            }
            
         }
   }
   

}else if (event.type === "input"){
   if(event.target.parentElement.classList.contains("btn-inp-wrapper")){
      let parElem = event.target.parentElement;
      let btnElement = parElem.querySelector(".btn-style");
    if(event.target.value !=""){
       btnElement.classList.add("active");
    }else{
       btnElement.classList.remove("active");
    }
   }
}


allInputs.forEach( inputElement => {
  sumOfInpValue += Number(inputElement.value);
})

resoult.innerHTML=sumOfInpValue;

}//end func




clickElement_Wrapper.addEventListener("click", mainClick);

clickElement_Wrapper.addEventListener("input", mainClick);

