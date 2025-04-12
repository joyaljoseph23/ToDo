function addTask(){
    const taskInput=document.getElementById("taskInput");
    const taskText=taskInput.value;
    console.log(taskText);
    if(taskText.trim()===""){
        alert("Please enter a task");
        return;
    }
    const listItem=document.createElement("li");
    const textNode=document.createTextNode(taskText);
    listItem.appendChild(textNode);

    const closeIcon=document.createElement("span");
    closeIcon.textContent="X";
    closeIcon.classList.add("Close");

    closeIcon.onclick=function(){
        listItem.remove();
    };

    listItem.appendChild(closeIcon);

    //listItem.textContent=taskText;
    // listItem.onclick=function(){
    //     listItem.remove();
    // }

    const taskList=document.getElementById("taskList");
    taskList.appendChild(listItem);
    taskInput.value = "";
}
