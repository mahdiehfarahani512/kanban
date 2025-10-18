import "./style.css";

const creatEl=document.getElementById("creatTask") as HTMLDivElement
const addEl=document.getElementById("addTask") as HTMLButtonElement


addEl.addEventListener("click",()=>{
 creatEl.classList.remove("hidden")
})




