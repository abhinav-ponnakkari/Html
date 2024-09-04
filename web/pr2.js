let newBut=document.createElement("button");
let body=document.querySelector("body");
body.prepend(newBut);
newBut.innerText="Click me"
newBut.style.backgroundColor="red";
newBut.style.color="white";;


let par=document.createElement("p")
newBut.after(par)
par.setAttribute("class","abhi")
par.innerText=("hiii alll");
par.style.textAlign="center"
par.style.fontSize="32px"


let par2=document.createElement("p")
par.after(par2)
par2.innerText=("2nd paragarph")
par2.setAttribute("class","nav")

console.log(document.querySelectorAll("p"))
let list=document.querySelectorAll("p");
console.log(list[0])