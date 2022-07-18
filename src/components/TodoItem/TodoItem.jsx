import React from "react";
import './TodoItem.css';

export function TodoItem(props) {

    function animatedRemove(e) {
        const time = 300;

        e.target.parentNode.style.transform = 'translateX(-150%)'
        e.target.parentNode.style.opacity = '0';
        e.target.parentNode.style.transition = `${time}ms ease-out`
        setTimeout(() => {
            console.log('deleted task')
            props.onDelete();
        }, time);
    }


    return (
        <li className="list-item">
            <i className="delete" onClick={animatedRemove}>X</i>
            <div className="todo-item" onClick={props.onComplete}>
                <div className="text-check">
                    <i className={`check ${props.completed && 'check-completed'}`}>✓</i>
                    <p className={`text ${props.completed && 'task-completed'}`} >{props.text}</p>
                </div>
            </div>
        </li>
    );
}