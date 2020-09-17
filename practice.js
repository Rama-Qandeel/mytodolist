
console.log("project 1") 
const navbar=document.querySelector(".navbar")
const input= document.querySelector("#input")
const tasklist=document.querySelector("#task")
const save=document.querySelector(".save")
const button_white = document.querySelector(".button_white");
const button_pink = document.querySelector(".button_pink");
//********************************************* */
const renderTime=function()
{
    const date=new Date()
   String= date.toDateString().split(" ")
 
   String[1]=date.getMonth()
    const viewDate=document.createElement("nav")
    viewDate.innerText=String.join(",");
    viewDate.setAttribute("style", "color: rgb(248, 100, 83);padding: 5px 7px;");
    navbar.append(viewDate)
}
//********************************** */
const getData=function(){
const storedInput=JSON.parse(localStorage.getItem('items'))//get data from localstor

if (storedInput) {
    tasklist.innerHTML=storedInput
  } else {
    items = []
  }
}
getData()
//*********************************** */
// const viewList = (text) => {
//     const li = document.createElement('li')
//     li.textContent = text
//     tasklist.appendChild(li)
//   }
//********************************************* */
const save1=function(){
   

}

const arrayToDo=[]
const add=function(){
const newTodo=input.value
// console.log(newtodo)
if (newTodo == "") {
    window.alert("You must enter a value in the New Todo field.");
}
else{

arrayToDo.push(newTodo)
renderList(newTodo)
// if (!arrayToDo.length<1){
//     console.log(arrayToDo)
// arrayToDo.forEach((elem,i)=>{
//     renderList(elem)})
//     console.log(arrayToDo)
// }
// viewList(newTodo)
}
input.value = ''; // Clear input

}

const renderList=function(newTodo){
 const li=document.createElement("li")
 li.innerText=newTodo;
 const removeButton=document.createElement("button")
 removeButton.innerText= "x"
 removeButton.classList.add('button', 'button--text')

 removeButton.setAttribute("style", "color: rgb(248, 100, 83);padding: 5px 7px;");
 removeButton.className=
 removeButton.addEventListener("click", function(){ 
 li.remove(); });
const button1=document.createElement("button")
button1.innerText= "reminder"
button1.className=
button1.addEventListener("click", alertdd)
const  textarea=document.createElement("textarea")
textarea.innerText="";

 li.append(removeButton);
 li.append(button1);
 li.append(textarea)
 tasklist.append(li)
}
//***************************************** */

// //********************************************* */

const deleteList=function(){
    localStorage.clear()
     tasklist.remove()
}
 //*************************************** */
 const alertdd=function(date){

 }
 
//*********************************************** */
const white_btn=function(){
button_white.addEventListener('click', function(){
    document.documentElement.style.setProperty("background-color", '#fff')
})}

//********************************************* */
const pink_btn=function(){
 button_pink.addEventListener('click', function(){
    document.documentElement.style.setProperty("background-color", '#fce')
})} 
//********************************************* */
const saveList=function(){
    localStorage.setItem('items', JSON.stringify(tasklist.innerHTML));//convert a data array to a string and save data to localsto

}
save.addEventListener('click',saveList)

//********************************** */
