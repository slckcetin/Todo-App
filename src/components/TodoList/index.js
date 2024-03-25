import { useState } from "react";
import Todo from "../Todo";
let filtered = null;

function TodoList({ todos, setTodos }) {
    const [status, setStatus] = useState("all");

    filtered = todos;
    if (status !== "all") {
        filtered = todos.filter((todo) =>
            status === "active" ? todo.completed === false : todo.completed === true
        );
    }

    const hasCompletedTodos = todos.some((todo) => todo.completed);
    
    const clearCompleted = () => {
        const newTodos = [...todos];
        const filteredTodos = newTodos.filter((todo) => !todo.completed);
        setTodos(filteredTodos);
    }

    const toggleAllTodo = () => {
        setTodos((prevTodos) => {
            const allCompleted = prevTodos.every((todo) => todo.completed);

            const updatedTodos = prevTodos.map((todo) => ({
                ...todo,
                completed: !allCompleted,
            }));

            return updatedTodos;
        });
    };

    const onSelect = () => {
        toggleAllTodo();
    };

    const activeTodosCount = todos.filter((todo) => !todo.completed).length;

    return (
        <div className="main">
            <input property="toggle_all" id="toggle-all"
                className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all" onClick={onSelect} style={{ display: todos.length === 0 ? 'none' : 'block' }}>
                Mark all as complete
            </label>
            <ul className="todo-list">
                {filtered.map((todo) => (
                    <Todo
                        text={todo.text}
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        setStatus={setStatus}
                    />
                ))}
            </ul>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{activeTodosCount} </strong>
                    items left
                </span>
                <ul className="filters">
                    <li>
                        <a href="#/" onClick={() => setStatus("all")} className={status === "all" ? "selected" : ""}>
                            All
                        </a>
                    </li>
                    <li>
                        <a href="#/" onClick={() => setStatus("active")} className={status === "active" ? "selected" : ""}>
                            Active
                        </a>
                    </li>
                    <li>
                        <a href="#/" onClick={() => setStatus("completed")} className={status === "completed" ? "selected" : ""}>
                            Completed
                        </a>
                    </li>
                </ul>
                <button className="clear-completed" onClick={clearCompleted}>
                {hasCompletedTodos && "Clear completed"}
                </button>
            </footer>
        </div>
    );
}

export default TodoList