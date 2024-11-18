var a = document.getElementById('taskinfo')
var b = document.getElementById('add')
var c = document.getElementById('tasklist')

b.addEventListener('click',function(){
    if (a.value.trim().length===0){
        alert("You can't proceed without adding a task...Kindly add your new task")
    }
    else
    c.innerHTML = c.innerHTML+
    `<div class="task">
        <input type="checkbox" id="done">
        <span id="work">${a.value}</span>
        <button class="del">Delete <i class="fa fa-trash"></i></button>
    </div>`
    let alltasks = document.querySelectorAll('.del')
    for (i=0;i<alltasks.length;i++){
        alltasks[i] . onclick = function(){
            this.parentNode.remove()
        }
    }
    a.value = ""
})

