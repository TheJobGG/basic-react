import React from "react";
import { toggleModalAndAnimate } from "../components/FloatingActionButton/FloatingActionButton";

import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();


function TodoProvider(props) {
    const todoExamples = [
        'Hacer un sandwich',
        'Aprender una nueva habilidad',
        'Salir con un amigo',
        'Tomar una ducha',
        'Salir a dar un paseo',
        'Hacer ejercicio',
        'Alimentar a mi mascota',
        'Limpiar mi cuarto',
        'Tocar la guitarra',
    ];

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const selectedPlaceholder = todoExamples[randomIntFromInterval(0, todoExamples.length)]



    const [item, saveItem] = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = item.filter(todo => todo.completed).length;
    const totalTodos = item.length;

    let searchedTodos = [];
    if (!searchValue.length >= 1) {
        searchedTodos = item;
    } else {
        searchedTodos = item.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText)
        })
    }


    const toggleCompleteTodo = (text) => {
        const todoIndex = item.findIndex(todo => todo.text === text);
        const newTodos = [...item];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveItem(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = item.findIndex(todo => todo.text === text);
        const newTodos = [...item]
        newTodos.splice(todoIndex, 1);
        saveItem(newTodos);
    };

    const onSubmitTodo = async (todoInput) => {
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault()
        try {
            let result = todoInput.value;
            if (result.trim() === '') {
                todoInput.style.borderColor = '#ff1a40';
                todoInput.style.color = '#ff1a40';
                todoInput.placeholder = 'Este campo es necesario..'

            } else {
                setTimeout(() => {

                    const todoResult = {
                        text: result.toString(),
                        completed: false
                    }

                    const newTodos = [...item]



                    if (newTodos.some(todo => todo.text === todoResult.text)) {
                        alert('¡Este elemento ya ha sido agregado!')
                        return;

                    }
                    newTodos.push(todoResult);
                    saveItem(newTodos);
                    /* setOpenModal(!openModal); */
                    toggleModalAndAnimate(openModal, setOpenModal);
                }, 270);
            }

        } catch (e) {

        }
    }


    /*     React.useEffect(() => {
            // 
        }, [totalTodos]); */

    return (
        <>
            <TodoContext.Provider value={{
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                toggleCompleteTodo,
                deleteTodo,
                setOpenModal,
                openModal,
                onSubmitTodo,
                todoExamples,
                selectedPlaceholder,
            }}>
                {props.children}
            </TodoContext.Provider>
        </>
    );
}

export { TodoContext, TodoProvider };




/* 
const addTodo = () => {
        try {
            let result = prompt('Escribe la tarea:');
            const todoResult = {
                text: result.toString(),
                completed: false
            }

            const newTodos = [...item]

            console.log(...newTodos)
            console.log(todoResult)

            if (newTodos.some(todo => todo.text === todoResult.text)) {
                alert('¡Este elemento ya ha sido agregado!')
                return;

            }
            newTodos.push(todoResult)
            saveItem(newTodos)

        } catch (e) {

        }
    }
*/