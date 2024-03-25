function Todo({ text, todos, setTodos, todo }) {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    };

    const completedHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <li className={`todo ${todo.completed ? "completed" : "selected"}`}>
            <div className="view">
                <input className="toggle"
                    value="text"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => completedHandler(todo.id)} />
                <label>{text}</label>
                <button className="destroy" onClick={deleteHandler}>
                </button>
            </div>
        </li>
    );
};

export default Todo