import React from "react";
import './TodoList.css'

export function TodoList(props) {
    return(
        <section id="TodoList">
            <ul className="List">
                {props.children}
            </ul>
        </section>
    )
}