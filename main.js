// //먼저 검색창에 입력했을 때, 값이 들어가게 하기


// let taskInput = document.getElementById("task-input")
// let plusBtn = document.getElementById("plus")
// let taskList = []
// let tabs = document.querySelectorAll(".tabs div")
// let tabsLine = document.getElementById("under-bar")
// let filterList = []
// let mode = 'all'

// for(let i = 1; i<tabs.length;i++){
      
//     tabs[i].addEventListener("click",function(event){filter(event)})
// }

// plusBtn.addEventListener("click",check)
// tabs.forEach(menu=> menu.addEventListener("click",(e=>tabsLineEvent(e))))



// function check(){
//     let taskValue = taskInput.value
//     let task = {
//         id: generateId(),
//         taskValue : taskInput.value,
//         isComplete : false
//     }
//     taskList.push(task)

//     console.log(taskList)
//     render()
// }

// function render(){

//     let resultHTML = '';

//     let allTabs = []

//     if(mode == "all"){
//         allTabs = taskList
//     }else if(mode = "done"){
//         allTabs = filterList
//     }else if(mode == "end"){
//         allTabs = filterList
//     }

//     for(let i=0;i<allTabs.length;i++){
//         if(allTabs[i].isComplete == true){
//             resultHTML += ` <div class="tasks">
//          <div class = "check-line">${allTabs[i].taskValue}</div>
//          <div>
//              <button onclick = "checkBtn('${allTabs[i].id}')">CHECK</button>
//              <button  onclick = "deleteBtn('${allTabs[i].id}')">DELETE</button>
//          </div>
//      </div>`
//         }else{
//             resultHTML += ` <div class="tasks">
//          <div>${allTabs[i].taskValue}</div>
//          <div>
//              <button onclick = "checkBtn('${allTabs[i].id}')">CHECK</button>
//              <button onclick = "deleteBtn('${allTabs[i].id}')">DELETE</button>
//          </div>
//      </div>`
//         }

//     }

//     document.getElementById("task-view").innerHTML = resultHTML;
 

// }


// function checkBtn(id){
//     for(let i=0;i<taskList.length;i++){
//         if(taskList[i].id == id){
//             taskList[i].isComplete = !taskList[i].isComplete
//             break;
//         }
//     }
//     render()
// }

// function deleteBtn(id){
//     for(let i=0;i<taskList.length;i++){
//         if(taskList[i].id == id){
//            taskList.splice(i,1) // 제거할 대상 정하는 것 제발 잊지마!
//             break;
//         }
//     }
//     render()
// }

//  function filter(event){

//     mode = event.target.id
//     filterList = []
//     if(mode == "all"){
//         render()
//     }else if(mode == "done"){
//         for(let i=0;i<taskList.length;i++){
//                       if(taskList[i].isComplete == false){
//                         filterList.push(taskList[i]);}
//                     }
//                         render()
//                    }else if(mode == "end"){

//                     for(let i=0;i<taskList.length;i++){
//                         if(taskList[i].isComplete == true){
//                           filterList.push(taskList[i]);}
//                       }
//                           render()
//     }
    
//  }


// function tabsLineEvent(e) {
//     tabsLine.style.left =  e.currentTarget.offsetLeft + "px";
//     tabsLine.style.width = e.currentTarget.offsetWidth + "px";
//     tabsLine.style.top =  e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";

// }

// function generateId(){
//     return '_' + Math.random().toString(36).substring(2);
// }

let inputValue = document.getElementById("input-value")
let plusBtn = document.getElementById("plus-btn")
let taskList = []
let mode = "all"
let filterList = []
let tabs = document.querySelectorAll(".tabs div")
let underBar = document.getElementById("under-bar")

plusBtn.addEventListener("click",plusCheck)
tabs.forEach(menu=> menu.addEventListener("click",(e=>tabsLineEvent(e))))

for(let i=1;i<tabs.length;i++){
    tabs[i].addEventListener("click",function (event){filter(event)})
}

function plusCheck(){
    let taskValue = inputValue.value 
    let task = {
        id: generateId (),
        taskValue : inputValue.value,
        isComplete :false
    }
    taskList.push(task)
    console.log(taskValue)
    render();
}


function render(){
    let allList = []
    if(mode == "all"){
        allList = taskList
    }else if(mode == "done"){
        allList = filterList
    }else if(mode == "not-done"){
        allList = filterList
    }




    let resultHTML = "";
 for(let i=0;i<allList.length;i++){
   if(allList[i].isComplete == true){
    resultHTML+= `<div class="tasks">
    <div class = "check-line">${allList[i].taskValue}</div>
    <div>
        <button onclick = "checkBtn('${allList[i].id}')">check</button>
        <button onclick = "deleteBtn('${allList[i].id}')">delete</button>
    </div>
</div>`;
   }else{
    resultHTML+= `<div class="tasks">
    <div>${allList[i].taskValue}</div>
    <div>
        <button onclick = "checkBtn('${allList[i].id}')">check</button>
        <button onclick = "deleteBtn('${allList[i].id}')">delete</button>
    </div>
</div>`;
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
           taskList.splice(i,1)
        }
    }
    render()
}

function filter(event){
    mode = event.target.id
    filterList = []

   
        if(mode == "all"){
            render()
        }else if(mode == "done"){
            for(let i=0;i<taskList.length;i++){
                if(taskList[i].isComplete == false){
                    filterList.push(taskList[i])
                }

            }
            render()
        }else if(mode == "not-done"){
            for(let i=0;i<taskList.length;i++){
                if(taskList[i].isComplete == true){
                    filterList.push(taskList[i])
                }
            }
            render()
        }

}


function tabsLineEvent(e) {
   underBar.style.left =  e.currentTarget.offsetLeft + "px";
   underBar.style.width = e.currentTarget.offsetWidth + "px";
   underBar.style.top =  e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";

}



function generateId(){
    return '_' + Math.random().toString(36).substring(2);
}
