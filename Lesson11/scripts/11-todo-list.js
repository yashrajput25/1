            const todoList = [
                {name: 'make dinner',
                dueDate: '2025-05-16'}, 
                
                {name: 'wash dishes',
                dueDate: '2025-05-16'}
        ];

            // function addValue(){
            //     const inputElement = document.querySelector(".js-input-2");
            //     let inputValue = inputElement.value
            //     console.log(inputValue);
            //     todoList.push(inputValue)
            //     console.log(todoList)
            //     inputElement.value = ''
            //     makeList(todoList)
            // }

            // function makeList(todoList){

            //     const listElement = document.querySelector(".js-list")
            //     listElement.innerHTML = '';
            //     let text = ''

            //     for(let i = 0; i < todoList.length ; i++){
            //         text += `<li> ${todoList[i]} </li>`
            //     }

                
            //     listElement.innerHTML = `<ul> ${text} </ul>`;
                
            // }

            function addTodo(){
                const inputElement = document.querySelector(".js-input");
                const dateElement = document.querySelector(".js-date");
                const name = inputElement.value;
                const dueDate = dateElement.value;
                todoList.push({
                    name,
                    dueDate });
                inputElement.value = " ";
                dateElement.value = ""
                console.log(todoList);
                renderTodoList();
            }


            function renderTodoList(){


                //printing the array on screen
                listElement = document.querySelector(".js-list");
                listElement.innerHTML = "";
                let text = "";

                for(let i = 0; i < todoList.length ; i++){
                    //let todo = todoList[i]
                    const {name , dueDate} = todoList[i]; //destructuring
                    text+= `<div> ${name} </div>
                    <div> ${dueDate} </div>
                    <button class="delete-button" onclick="todoList.splice(${i},1);
                    renderTodoList();"
                    > Delete </button>`
                }

                listElement.innerHTML = text;

            }

            renderTodoList();





