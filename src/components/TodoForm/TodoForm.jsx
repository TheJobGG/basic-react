import React from "react";
import { TodoContext } from "../../TodoContext";
import { toggleModalAndAnimate } from "../FloatingActionButton/FloatingActionButton";

import './TodoForm.css';


export function TodoForm() {
    const { onSubmitTodo, openModal, setOpenModal, selectedPlaceholder} = React.useContext(TodoContext);

    const onCancel = () => {
        toggleModalAndAnimate(openModal, setOpenModal);
    }
    
    const checkTodo = () => {
        const todoInput = document.getElementById('form-input');
        onSubmitTodo(todoInput);
    }

    function onEnter(e) {
        if (e.which === 13 && !e.shiftKey) {
            e.preventDefault();
            checkTodo();
        }
    }

    const handleIfError = event => {
        event.target.style.borderColor = '#000000';
        event.target.style.color = '#000000';
        event.target.placeholder = selectedPlaceholder;
    }

    return (
        <form id="form-todo" onSubmit={checkTodo}>
            <label htmlFor="todo-input">¡Introduce alguna tarea!</label>
            <textarea
                name="form-input"
                id="form-input"
                placeholder={selectedPlaceholder ?? 'Hacer ejercicio'}
                autoFocus
                onKeyDown={onEnter}
                onChange={handleIfError}
            >
            </textarea>
            <div className="form-buttons">
                <button onClick={onCancel} type="button">
                    Cancelar
                </button>

                <button type="submit">
                    Añadir
                </button>
            </div>
        </form>
    );
}