import React from "react";
import { TodoContext } from "../../TodoContext";
import './FloatingActionButton.css'

export function FloatingActionButton() {


    const { setOpenModal, openModal } = React.useContext(TodoContext)


    const addTodo = () => {
        toggleModalAndAnimate(openModal, setOpenModal);
    }

    return (
        <button
            id="todo-button"
            onClick={addTodo}
            data-open-modal={`${openModal}`}
        >
            +
        </button>
    );
};


export function toggleModalAndAnimate(openModal, setOpenModal) {
    const button = document.getElementById('todo-button')
    button.disabled = true;
    moveArrow(openModal);

    if (openModal) {
        document.getElementById("form-todo").style.transition = '250ms ease-in';
        document.getElementById("form-todo").style.transform = 'translateX(-1000px)';

        setTimeout(() => {
            button.disabled = false;
            setOpenModal(false)
            console.log('cerrar')
        }, 250);
    } else {
        setOpenModal(true)
        setTimeout( button.disabled = false, 250);
        console.log('abrir')
    }
}

function moveArrow(openModal) {
    const arrow = document.getElementById('arrow') ?? undefined;
    if (openModal && arrow !== undefined) {
        arrow.style.transform = 'translateY(0px)';
        arrow.style.transition = '250ms ease-out';
    } else if (!openModal && arrow !== undefined) {
        arrow.style.transition = '250ms ease-in';
        arrow.style.transform = 'translateY(500px)';
    }
}