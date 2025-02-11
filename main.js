//먼저 검색창에 입력했을 때, 값이 들어가게 하기


let taskInput = document.getElementById("task-input")
let plusBtn = document.getElementById("plus")
let taskList = []


plusBtn.addEventListener("click",check)


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
             <button>DELETE</button>
         </div>
     </div>`
        }else{
            resultHTML += ` <div class="tasks">
         <div>${taskList[i].taskValue}</div>
         <div>
             <button onclick = "checkBtn('${taskList[i].id}')">CHECK</button>
             <button>DELETE</button>
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

function generateId(){
    return '_' + Math.random().toString(36).substring(2);
}