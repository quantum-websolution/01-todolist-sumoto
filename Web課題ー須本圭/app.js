`use strict`;

{

    let todolists = [
        "todo",
        "money",
        "take",
        "date",
        "dueDate",
        "memo",
    ]

//todo
    const todo = document.querySelector(".todo");
    const money = document.querySelector(".money");
    const take = document.querySelector(".take");
    const date = document.querySelector(".date");
    const dueDate = document.querySelector(".duedate");
    const memo = document.querySelector(".memo");
//button
    const addButton = document.getElementById("addButton");
    const allDeleteButton = document.getElementById("allDeleteButton");
    const selectDeleteButton = document.getElementById("selectDeleteButton");
//table
    const tableForm = document.getElementById("tableForm");

    const tapBtn = () => {
        const todoList = {
            todo: todo.value,
            money: money.value,
            take: take.value,
            date: date.value,
            dueDate: dueDate.value,
            memo: memo.value,
        
        if(todoList) {
            todolists.push(todoList);
            todo.value = "";
            money.value ="";
            take.value = "";
            date.value = "";
            dueDate.value = "";
            memo.value = "";
            showTodos();
        }
    }
 }
    addButton.addEventListener("click", tapBtn);

    const showTodos = () => {
        tableForm.textContent = "";

        todolists.forEach((todolist, number) => {

        const tableRecord = document.createElement("tr");
        tableForm.appendChild("tableRecord");
        const tableCheck = document.createElement("td");
        const tableID = document.createElement("td");
        const tableTodo = document.createElement("td");
        const tableDate = document.createElement("td");
        const tableMoney = document.createElement("td");
        const tableTake = document.createElement("td");
        const tableMemo = document.createElement("td");
        const tableDuedate = document.createElement("td");
        const tableButton = document.createElement("td");

        const box = `<div id="checkBox"><label for="check-box"></label>
                     <input id="check-box" type="checkbox" name="select"><div>`;

        const clear = `<div id="clearBtn"></div>
                       <button type="button" name="clear-btn" value="削除" >削除</button></div>`;
        
        tableCheck.insertAdjacentHTML("beforeend", box);
        tableID.textContent = number + 1;
        tableTodo.textContent = todolist.todo;
        tableDate.textContent = todolist.date;
        tableMoney.textContent = todolist.money;
        tableTake.textContent = todolist.take;
        tableMemo.textContent = todolist.memo;
        tableDuedate.textContent = todolist.dueDate;
        tableButton.insertAdjacentHTML("beforeend", clear);
        
        tableRecord.appendChild("tableCheck");
        tableRecord.appendChild("tableId");
        tableRecord.appendChild("tableTodo");
        tableRecord.appendChild("tableDate");
        tableRecord.appendChild("tableMoney");
        tableRecord.appendChild("tableTake");
        tableRecord.appendChild("table.Memo");
        tableRecord.appendChild("tableDuedate");
        tableRecord.appendChild("tableButton");

        tableButton.appendChild(createDeleteButton(tableRecord));
       });
    }
       const createDeleteButton = (tableRecord) => {
        const index = tableRecord.rowIndex-1;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "削除";
        deleteButton.addEventListener("click",() => {
        todolists.splice(index, 1);
        showTodos();
        })
       }

       allDeleteButton.addEventListener("click", () => {
        showTodos.remove();
       });
}

if(todo.value !== "") {
    alert("予定を入力してください");
}


/*if(tableAdd !== "") {
    confirm("本当に削除しますか？")
    tableAdd.textContent = ""
//console.log(tableAdd)
} else {
   // console.log("削除をキャンセルしました。")
}*/