//먼저 검색창에 입력했을 때, 값이 들어가게 하기


let taskInput = document.getElementById("task-input")
let plusBtn = document.getElementById("plus")
let taskList = []


plusBtn.addEventListener("click",check)


function check(){
    let taskValue = taskInput.value
    taskList.push(taskValue)

    console.log(taskList)
    render()
}

function render(){

    let resultHTML = '';
    for(let i=0;i<taskList.length;i++){
        resultHTML += ` <div class="tasks">
         <div>${taskList[i]}</div>
         <div>
             <button>CHECK</button>
             <button>DELETE</button>
         </div>
     </div>`

    }

    document.getElementById("task-view").innerHTML = resultHTML;
 

}