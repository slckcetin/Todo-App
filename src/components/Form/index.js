
function Form({ inputText, setInputText, todos, setTodos }) {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    
    const submitTodoHandler = (e) => {
        e.preventDefault();
        
       if (!inputText.trim() && inputText.trim() === "") return;

        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() }
        ]);
        setInputText("")
    }

    return (
        <form onSubmit={submitTodoHandler}>
            <input
                className="new-todo"
                name="todoname"
                type="text"
                value={inputText}
                onChange={inputTextHandler}
                placeholder="What needs to be done?"
                autoFocus
            />
        </form>
    )
}

export default Form