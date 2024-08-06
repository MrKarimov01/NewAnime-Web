let lines = document.querySelectorAll(".line");
let li_items = document.querySelectorAll(".nav_li_items");
let hrefLoc = window.location.hash.substring(1);
// let count = sessionStorage.setItem("link");
function change(e){
    lines.forEach((item)=>item.classList.remove("line_active"))
    
    if(e.querySelector('.line')){
        e.querySelector('.line').classList.add("line_active")
        
        
    }  
}
li_items.forEach(item=>{
    let ahref=  item.querySelector("a")
    let linein = item.querySelector('.line')
    if(hrefLoc.toLowerCase() == ahref.textContent.toLocaleLowerCase()){

        console.log(linein.setAttribute("class","line line_active"));
        
    }
    
})


