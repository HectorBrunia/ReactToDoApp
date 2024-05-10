const TodoFilter = ({ setFilterTodo, filter }) => {
    return (
        <>
            <button
                onClick={() => setFilterTodo("all")}
                className={`hover:text-brightBlue   ${filter === "all" && "text-brightBlue dark:text-brightBlue "}`}
            >
                All
            </button>
            <button
                onClick={() => setFilterTodo("active")}
                className={`hover:text-brightBlue   ${filter === "active" && "text-brightBlue dark:text-brightBlue "}`}
            >
                Active
            </button>
            <button
                onClick={() => setFilterTodo("completed")}
                className={`hover:text-brightBlue   ${filter === "completed" && "text-brightBlue dark:text-brightBlue "}`}
            >
                completed
            </button>
        </>
    );
};
export default TodoFilter;
