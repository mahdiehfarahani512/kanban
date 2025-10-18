import "./style.css";

const addTask=document.getElementById("addtask")as HTMLButtonElement;
const showModal=document.getElementById("showmodal")as HTMLDivElement;
const creatEl=document.getElementById("creatmodal")as HTMLButtonElement;
const titleEl=document.getElementById("title")as HTMLInputElement;
const descriEl=document.getElementById("description")as HTMLInputElement;
const statusEl=document.getElementById("status")as HTMLInputElement;
const doEl=document.getElementById("todo")as HTMLDivElement
const doingEl=document.getElementById("doing")as HTMLDivElement;
const doneEl=document.getElementById("done")as HTMLDivElement;
const count1El=document.getElementById("count1")as HTMLSpanElement;
const count2El=document.getElementById("count2")as HTMLSpanElement;
const count3El=document.getElementById("count3")as HTMLSpanElement;
const darkEl=document.getElementById("darkmode")
let count01=0;
let count02=0;
let count03=0;


addTask?.addEventListener("click",()=>{
showModal?.classList.remove("hidden")

})
creatEl?.addEventListener("click",()=>{
    const titleInput=titleEl.value;
    const descriptionInput=descriEl.value;
    const statusInput=statusEl.value;
    if(statusInput==="TODO"){
        doEl.innerHTML+=`   <div class="flex gap-3">
            <div id="todo" class=" flex flex-col gap-4" >
           <div class="bg-white shadow-md dark:bg-[#2b2c37]  w-[288px] h-[100px] p-5 rounded-[8px] hover:cursor-pointer hover:opacity-[0.2]">
            <span class="font-bold text-[15px]">${titleInput}</span><br>
            <span class="text-[12px] font-medium text-gray-400">${descriptionInput}</span>
           </div>
          </div>`
    }else if(statusInput==="DOING"){
        doingEl.innerHTML+=`<div  id="doing" class=" flex flex-col gap-4" >
           <div class="bg-white shadow-md dark:bg-[#2b2c37]  w-[288px] h-[100px] p-5 rounded-[8px] hover:cursor-pointer hover:opacity-[0.2] ">
            <span class="font-bold text-[15px]">${titleInput}</span><br>
            <span class="text-[12px] font-medium text-gray-400">${descriptionInput}</span>
           </div>
          </div>
      `
    }else if(statusInput==="DONE"){
        doneEl.innerHTML+=`<div  id="doing" class=" flex flex-col gap-4" >
           <div class="bg-white shadow-md dark:bg-[#2b2c37]  w-[288px] h-[100px] p-5 rounded-[8px] hover:cursor-pointer hover:opacity-[0.2] ">
            <span class="font-bold text-[15px]">${titleInput}</span><br>
            <span class="text-[12px] font-medium text-gray-400">${descriptionInput}</span>
           </div>
          </div>
      `
    }
    titleEl.value=""
    descriEl.value=""
    statusEl.value=""
    showModal?.classList.add("hidden")
})

darkEl?.addEventListener("click",()=>{
    document.documentElement.classList.toggle("dark")
})





