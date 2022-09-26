console.log("hell");
const form = document.getElementById("form");
const input=document.getElementById("input");
const ul=document.getElementById("ul");
const todos=JSON.parse(localStorage.getItem("todos"));

if(todos){
    todos.forEach( todo =>{
        add(todo);
    })
}

form.addEventListener("submit",function(event){
    //データを
    event.preventDefault();
    console.log(input.value);
    add()
});

function add(todo){
    if(todo){
        input.value=todo;
    }
    if(input.value!=""){
        const li=document.createElement("li");
        li.innerText=input.value;
        li.classList.add("list-group-item");
        li.addEventListener("contextmenu",function(event){
            event.preventDefault();
            li.remove();
            saveData();
        })
        li.addEventListener("click",function(){
            li.classList.toggle("text-decoration-line-through")
        })
        ul.appendChild(li);
        input.value="";
        saveData();
    }
}

//リロードでデータを失わないための関数 javascriptはリロードのたびにファイルが実行される
function saveData(){
    //該当するすべてのタグを取得
    const lists=document.querySelectorAll("li");
    let todos=[];
    lists.forEach(list => {
        todos.push(list.innerText);
    });
    //ローカルストレージ（キー、値【一般的にはJSON化して保存する】）
    localStorage.setItem("todos",JSON.stringify(todos));
    console.log(lists);
}

function showData(){
    locals=[];
    const localData =localStorage.getItem("todos");
    localData.forEach(todos =>{
        locals.push(todos)
    }

    )
}

