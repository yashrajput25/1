            const myArray = [];

            function addValue(){
                const inputElement = document.querySelector(".js-input-2");
                let inputValue = inputElement.value
                console.log(inputValue);
                myArray.push(inputValue)
                console.log(myArray)
                inputElement.value = ''
                makeList(myArray)
            }

            function makeList(myArray){

                const listElement = document.querySelector(".js-list")
                listElement.innerHTML = '';
                let text = ''

                for(let i = 0; i < myArray.length ; i++){
                    text += `<li> ${myArray[i]} </li>`
                }

                
                listElement.innerHTML = `<ul> ${text} </ul>`;
                
            }

            function addTodo(){
                const inputElement = document.querySelector(".js-input");
                myArray.push(inputElement.value);
                inputElement.value = " ";
                console.log(myArray);
                renderTodoList();
            }


            function renderTodoList(){


                //printing the array on screen
                listElement = document.querySelector(".js-list");
                listElement.innerHTML = "";
                let text = "";

                for(let i = 0; i < myArray.length ; i++){
                    let todo = myArray[i]
                    text+= `<p> ${todo}

                    <button onclick="myArray.splice(${i},1);
                    renderTodoList();"
                    > Delete </button> 
                    </p>`
                }

                listElement.innerHTML = text;

            }





