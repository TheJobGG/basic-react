import React from "react";
import { TodoContext } from "../../TodoContext";

import './TodoCounter.css';


export function TodoCounter() {
    const { totalTodos: total,
        completedTodos: completed } = React.useContext(TodoContext);
    return (
        <div className="TodoCounter-container">
            <h2 className="TodoCounter">{total === completed && total !== 0 ? `🎈🤩🎈` : total === 0 ? '' : `Has completado`}</h2>
            <h2 className='TodoCounter' > {total === completed && total !== 0 ? `¡TODO's completados!` : total === 0 ? '👋 ¡Hola! 👋' : `${completed} de ${total} TODOs`} </h2>
        </div>
    );
}