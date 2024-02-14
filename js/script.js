
let todolist= document.getElementById("todolist");
todolist.style.listStyleType="none";

let date= new Date();
let hour= date.getHours();
let element;

for(let i=hour; i>=8; i--){
   element= document.getElementById("item_"+i);
   element.style.textDecoration="line-through";
   element.querySelector("input").checked=true;
}


