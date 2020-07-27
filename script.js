const btnInpWrappers = document.querySelectorAll(".btn-inp-wrapper");

const doClickBtnWrapp = (event)=>{
 if(event.target.classList.contains("btn-style")){
    console.log("btn");
    console.log(event.currentTarget.querySelector(".inp-style"));    
 } else if(event.target.classList.contains("inp-style")){
    console.log(event.currentTarget.querySelector(".btn-style"));
    console.log("inp");
 }

}


btnInpWrappers.forEach(btnWrapper => {
    btnWrapper.addEventListener("click", doClickBtnWrapp);
});