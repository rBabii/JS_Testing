const clickElement_Wrapper = document.querySelector("#main-wrapper");

let mainClick = (event) => {
if(event.target.parentElement.classList.contains("btn-inp-wrapper")){
   let parElem = event.target.parentElement;
   let inpElement = parElem.querySelector(".inp-style");
   let btnElement = parElem.querySelector(".btn-style");
   console.log(btnElement, inpElement);
}
}

clickElement_Wrapper.addEventListener("click", mainClick);


