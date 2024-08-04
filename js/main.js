let lines = document.querySelectorAll(".line");
let li_items = document.querySelectorAll(".nav_li_items");
// let count = sessionStorage.setItem("link");
function change(e){
    sessionStorage.setItem("link","true")
    lines.forEach((item)=>item.classList.remove("line_active"))
    
    if(e.querySelector('.line')){
        e.querySelector('.line').classList.add("line_active")
        sessionStorage.setItem("navKey",e.querySelector('a').textContent)
        
    }  
}

li_items.forEach(i=>{
    let store = sessionStorage.getItem("navKey")

    if(store == i.querySelector("a").textContent){
        i.querySelector(".line").classList.add("line_active")
    }
})