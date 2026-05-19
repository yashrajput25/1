    
    const todoList = JSON.parse(
        localStorage.getItem('todoList') 
    ) || [];

    document.querySelector(".js-add-button").addEventListener('click', addTodo);

    function addTodo(){
            const inputElement = document.querySelector(".js-input");
            const dateElement = document.querySelector(".js-date");
            const name = inputElement.value;
            const dueDate = dateElement.value;

            //pushing the name & dueDate in the array
            todoList.push({
                name,
                dueDate });

            //clearing the values in the input elements    
            inputElement.value = "";
            dateElement.value = ""

            console.log(todoList);

            //calling function to render the list on screen
            renderTodoList();
        }


    function renderTodoList(){
            //printing the array on screen
            listElement = document.querySelector(".js-list");
            let text = "";

            
            // NEW LOOP 
            todoList.forEach(function(value , index){
                
                const {name, dueDate} = value;
                console.log(name, dueDate, index);

                text += `<div> ${name} </div>
                <div> ${dueDate} </div>
                <button class = "delete-button js-delete-button";
                > Delete </button>`

            });

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

            //deleteButtonElements is an array of all the delete buttons on the screen
            deleteButtonElements = document.querySelectorAll(".js-delete-button");

            console.log(deleteButtonElements);

            deleteButtonElements.forEach((deleteButtonElement, index)=>{
                deleteButtonElement.addEventListener('click', ()=>{
                    todoList.splice(index,1);
                    renderTodoList();
                })
            })

        }

    renderTodoList();










