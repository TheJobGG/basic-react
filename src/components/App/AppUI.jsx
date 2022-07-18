import React from "react";

import { TodoCounter } from '../TodoCounter/TodoCounter'
import { TodoSearch } from '../TodoSearch/TodoSearch'
import { TodoList } from '../TodoList/TodoList'
import { TodoItem } from '../TodoItem/TodoItem'
import { FloatingActionButton } from '../FloatingActionButton/FloatingActionButton'
import { NotFound } from "../NotFound/NotFound";
import { AddNewTodo } from "../AddNewTodo/AddNewTodo";
import { Modal } from "../Modal";

import { TodoContext } from "../../TodoContext";
import { TodoForm } from "../TodoForm/TodoForm";

export function AppUI() {

    const {
        searchValue,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        addTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {searchedTodos <= 0 && searchValue
                    ? <NotFound />
                    : searchedTodos <= 0 && !searchValue
                        ? <AddNewTodo openModal={openModal}/>
                        : searchedTodos.map(todo => (
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => toggleCompleteTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                        ))
                }
            </TodoList>
            {/* <FloatingActionButton setOpenModal={setOpenModal(!openModal)} /> */}
            <FloatingActionButton onAdd={() => addTodo()} setOpenModal={setOpenModal} openModal={openModal} />

            {openModal && (
                <Modal>
                    <div className="modal-container">
                        <TodoForm/>
                    </div>
                </Modal>
            )}


        </>
    )
}