//먼저 검색창에 입력했을 때, 값이 들어가게 하기


let taskInput = document.getElementById("task-input")
let plusBtn = document.getElementById("plus")
let taskList = []
let tabs = document.querySelectorAll(".tabs div")
let tabsLine = document.getElementById("under-bar")


plusBtn.addEventListener("click",check)
tabs.forEach(menu=> menu.addEventListener("click",(e=>tabsLineEvent(e))))


function check(){
    let taskValue = taskInput.value
    let task = {
        id: generateId(),
        taskValue : taskInput.value,
        isComplete : false
    }
    taskList.push(task)

    console.log(taskList)
    render()
}

function render(){

    let resultHTML = '';
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].isComplete == true){
            resultHTML += ` <div class="tasks">
         <div class = "check-line">${taskList[i].taskValue}</div>
         <div>
             <button onclick = "checkBtn('${taskList[i].id}')">CHECK</button>
             <button  onclick = "deleteBtn('${taskList[i].id}')">DELETE</button>
         </div>
     </div>`
        }else{
            resultHTML += ` <div class="tasks">
         <div>${taskList[i].taskValue}</div>
         <div>
             <button onclick = "checkBtn('${taskList[i].id}')">CHECK</button>
             <button onclick = "deleteBtn('${taskList[i].id}')">DELETE</button>
         </div>
     </div>`
        }

    }

    document.getElementById("task-view").innerHTML = resultHTML;
 

}


function checkBtn(id){
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete
            break;
        }
    }
    render()
}

function deleteBtn(id){
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].id == id){
           taskList.splice(i,1) // 제거할 대상 정하는 것 제발 잊지마!
            break;
        }
    }
    render()
}

function tabsLineEvent(e) {
    tabsLine.style.left =  e.currentTarget.offsetLeft + "px";
    tabsLine.style.width = e.currentTarget.offsetWidth + "px";
    tabsLine.style.top =  e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";

}

function generateId(){
    return '_' + Math.random().toString(36).substring(2);
}