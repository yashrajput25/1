    


    
    const todoList = JSON.parse(
        localStorage.getItem('todoList') 
    ) || [];



    function addTodo(){
            const inputElement = document.querySelector(".js-input");
            const dateElement = document.querySelector(".js-date");
            const name = inputElement.value;
            const dueDate = dateElement.value;
            todoList.push({
                name,
                dueDate });
            inputElement.value = "";
            dateElement.value = ""
            console.log(todoList);
            renderTodoList();
        }


    function renderTodoList(){
            //printing the array on screen
            listElement = document.querySelector(".js-list");
            listElement.innerHTML = "";
            let text = "";

            
            // NEW LOOP 
            todoList.forEach(function(value , index){
                //console.log(value);
                const {name, dueDate} = value;
                console.log(name, dueDate, index);
                text += `<div> ${name} </div>
                <div> ${dueDate} </div>
                <button class = "delete-button"
                onclick = "todoList.splice(${index},1);
                renderTodoList();"
                > Delete </button>`

            })

            // OLD FOR LOOP
            // for(let i = 0; i < todoList.length ; i++){
            //     //let todo = todoList[i]
            //     const {name , dueDate} = todoList[i]; //destructuring
            //     text+= `<div> ${name} </div>
            //     <div> ${dueDate} </div>
            //     <button class="delete-button" onclick="todoList.splice(${i},1);
            //     renderTodoList();"
            //     > Delete </button>`
            // }

            listElement.innerHTML = text;
            localStorage.setItem('todoList', JSON.stringify(todoList));

        }

    renderTodoList();





