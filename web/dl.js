let btn=document.createElement("button")
btn.innerHTML="<i>click me</i>";
document.querySelector("body").prepend(btn)
btn.style.height='100px'
btn.style.width='100px'
btn.style.fontSize="25px"

let body=document.querySelector("body");
let mode='light'
btn.addEventListener("mouseover",(e)=>{
    if(mode==='light')
    {
        console.log('dark')
        alert("dark mode")
        mode='dark'
        body.style.backgroundColor='#000'
        body.style.color='#fff'
    }else
    {
        console.log('light')
        mode='light'
           body.style.backgroundColor="white"
    }
});



// btn.onclick=(e)=>{
//     console.log("clicked")
//     console.log(e.type)
// }
