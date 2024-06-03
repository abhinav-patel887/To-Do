const searchbox=document.getElementById("search");
const listbox = document.getElementById("lists");
document.querySelector('#search').addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        AddTask();
    }
});

function AddTask(){
    if(searchbox.value === ''){
        alert("Yaar..!! Write Something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=searchbox.value;
        listbox.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    searchbox.value="";
    save();
}
listbox.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("one");

        save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    }
},false);
function save(){
    localStorage.setItem("data",listbox.innerHTML);
}
function display(){
    listbox.innerHTML=localStorage.getItem("data");
}
display();
