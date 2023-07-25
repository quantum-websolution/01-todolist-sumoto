`use strict`;  //厳格モード

{
    let todolists = [] //空の配列を定義する理由は後からpushで追加もできるし、削除ボタンにも使用でき、柔軟性がある

    //todo
    const todo = document.getElementById("todo")
    const money = document.getElementById("money")
    const take = document.getElementById("take")
    const date = document.getElementById("date")
    const duedate = document.getElementById("duedate")
    const memo = document.getElementById("memo") 

    //btn
    const addButton = document.getElementById("addButton")
    const allDeleteButton = document.getElementById("allDeleteButton")
    const selectDeleteButton = document.getElementById("selectDeleteButton")

    //新追加
    const tentativePlan = document.getElementById("tentative-plan")

    const weatheres = document.querySelectorAll("input[name='rain-or-shine']")
    //console.log(weatheres)

    //追加チェックボックス機能
    tentativePlan.addEventListener("change", () => {
        if (tentativePlan.checked) {
            tentativePlan.value = "仮";
        } else {
            tentativePlan.value = "確定済み";
        }
        //console.log( tentativePlan.value)
    })

    

    //table
    const tableAdd = document.getElementById("table-add")

    //console.log(tableForm)

    //addbtn処理
    addButton.addEventListener("click", () => {

        //console.log(todo.value === "")

        if (todo.value === "") {
            alert("予定を入力してください")  //console.logの処理確認は位置で変わる
        } else {
        
        //console.log("テスト")
        const todoList = {  //連想配列
            todo: todo.value,
            money: money.value,
            take: take.value,
            date: date.value,
            duedate: duedate.value,
            memo: memo.value,
            tentativePlan: tentativePlan.value,
            rainOrshine: rainOrshine.value,
            dueTorain: dueTorain.value,
            another: another.value,
        }

    if(todoList) {
        todolists.push(todoList)  //todolistsの後ろに新しく生成したtodoListを追加していく　
        todo.value = ""
        money.value = ""
        take.value = ""
        date.value = ""
        duedate.value = ""
        memo.value = ""
        tentativePlan.value = ""
        rainOrshine.value = ""
        dueTorain.value = ""
        another.value = ""
        showTodos()
    }
  }
    })

    //alldelete処理
    allDeleteButton.addEventListener("click", () => {
        const addTrue = confirm("本当に予定を削除しますか？")
        if(addTrue === true) {
        //console.log(todolists)
        todolists = []
        //todolists.splice(0, todolists.length)
       // console.log(todolists) //動きの確認
        showTodos() 
        }
    })

      //削除ボタン,tableRecordの削除をする処理
      const createDeleteButton = (tableRecord) => { //引数をいれることで関数処理の中に引数を利用して処理ができる。//ボタンが押されたときに外部から渡される値　
        //新しくつくった<tr>の中に削除ボタンを生成し動く処理
        const deleteButton = document.createElement("button") //表に入る削除buttonの作成
        deleteButton.textContent = "削除"

        deleteButton.classList.add("delete-button-class");

        deleteButton.addEventListener("click", () => {
            const index = tableRecord.rowIndex-1 //rowIndexはテーブル要素に使用できるプロパティ　//-1 はテーブルのインデックスが０からのため
            todolists.splice(index, 1)  //上記でindexの変数をとりspliceで生成したtodolistsの０番目から1つ削除する
            showTodos()
        })
        return deleteButton //このreturnがあることで関数の外部に返され、ボタンが押されるたびに新しい削除ボタンの生成ができる
    }

    const showTodos = () => {
        tableAdd.textContent = ""  //ここで一度クリアにする
        
        //配列の取り出し
        todolists.forEach((todolist, number) => {

            //tableの下に表を追加
            const tableRecord = document.createElement("tr") //<tr>タグをHTML要素で作成
            tableRecord.id = "table-form"
            tableAdd.appendChild(tableRecord) //tableRecordがtableAddの子要素として追加された。

            const tableCheck = document.createElement("td")
            tableCheck.classList.add("table-center")

            const tableId = document.createElement("td")
            tableId.classList.add("table-center")

            const tableTodo = document.createElement("td")
            

            const tableDate = document.createElement("td")
            tableDate.classList.add("table-center")

            const tableMoney = document.createElement("td")
            tableMoney.classList.add("table-right")

            const tableTake = document.createElement("td")
            

            const tableMemo = document.createElement("td")
            

            const tableDuedate = document.createElement("td")
            tableDuedate.classList.add("table-center")

            const tableButton = document.createElement("td")
            tableButton.classList.add("table-center")

            const tabletenTativePlan = document.createElement("td")
            tabletenTativePlan.classList.add("table-center")

            const tableRainOrshine = document.createElement("td")
            tableRainOrshine.classList.add("table-center")

            const tableDueTorain = document.createElement("td")
            tableDueTorain.classList.add("table-center")

            const tableAnother = document.createElement("td")
            tableAnother.classList.add("table-center")

            //追加したtdの中にいれるテキスト
            
            const box = `<div class="box"><input type="checkbox"></div>` //document.createElement("input")でも作成出来る　//選択削除ボタン処理のためにidの追加
            tableCheck.insertAdjacentHTML("beforeend", box)

            tableId.textContent = number + 1
            tableTodo.textContent = todolist.todo //組んだ配列のなかからドット記法で表記
            tableDate.textContent = todolist.date
            //フォーマット変更
            const format = new Date(todolist.date)
            //console.log(format.toLocaleString())
            if(todolist.date !== "") {
                const Year = format.getFullYear()
                const Month = format.getMonth() + 1
                const Date = format.getDate()
                const Hours = format.getHours()
                const Minutes = format.getMinutes()
                const Seconds = format.getSeconds() + ":" + "00"
                tableDate.textContent = Year+"/"+Month+"/"+Date+" "+Hours+":"+Minutes+":"+Seconds
            }

            tableMoney.textContent = todolist.money

            const moneyValue = todolist.money
            if(todolist.money === "") {
                tableMoney.textContent = "０円"
            } else {
                tableMoney.textContent = `${moneyValue}円`
            }

            tableTake.textContent = todolist.take
            tableMemo.textContent = todolist.memo
            tableDuedate.textContent = todolist.duedate
            const format2 = new Date(todolist.duedate)
            if(todolist.duedate !== "") {
                const Year2 = format2.getFullYear()
                const Month2 = format2.getMonth() + 1
                const Date2 = format2.getDate()
                const Hours2 = format2.getHours()
                const Minutes2 = format2.getMinutes()
                const Seconds2 = format2.getSeconds() + ":" + "00"
                tableDuedate.textContent = Year2+"/"+Month2+"/"+Date2+" "+Hours2+":"+Minutes2+":"+Seconds2
            }


            const deleteButton = createDeleteButton(tableRecord)
            tableButton.appendChild(deleteButton)

            const planValue = tentativePlan.value
            if(todolists.tentativePlan === "") {
                planValue.textContent = "仮の予定"
            } else {
                planValue.textContent = "確定済み"
            }

         //上記で新しくつくった要素をここで追加している。
            tableRecord.appendChild(tableCheck) //指定された要素を既存の要素の子要素として追加している。これによりtableCheckがtableRecordの子要素として追加される。
            tableRecord.appendChild(tableId)
            tableRecord.appendChild(tableTodo)
            tableRecord.appendChild(tableDate)
            tableRecord.appendChild(tableMoney)
            tableRecord.appendChild(tableTake)
            tableRecord.appendChild(tableMemo)
            tableRecord.appendChild(tableDuedate)
            tableRecord.appendChild(tableButton)
        })
    }

    //selectdalete処理
    selectDeleteButton.addEventListener("click", () => {
        const checkBoxes = document.querySelectorAll("input[type='checkbox']") //const boxで作った<input>をここで取得。[]で属性の指定
        const indexDelete = [] //削除の対象となるチェックボックスを保存する配列の定義

        checkBoxes.forEach((checkBox, index) => { //checkBoxesの要素に対してのループ処理。　//第一引数に”checkBox(今の要素)”、第二引数に”位置”を指定　(要素,インデックス)の形
            if(checkBox.checked) {   //取得したチェックボックスがチェックされた時
                indexDelete.push(index)  //そのチェックボックスのインデックスをindexDelete配列に追加
            }
        })

        for(let i = indexDelete.length - 1; i >= 0; i--) { //indexDelete配列に格納したインデックスを逆ループ処理。リストの末尾から順に削除し、０以上になるまでループさせる。
            const index = indexDelete[i] //現在のループで処理するインデックスをindexとして取得した。
            todolists.splice(index, 1) //todolists配列から、indexで指定された位置から1つ要素を削除。表を追加した際に生成される削除ボタンと同じ処理
        }
        showTodos()
    })
}