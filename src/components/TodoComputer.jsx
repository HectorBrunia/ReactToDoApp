import TodoFilter from "./TodoFilter";
const TodoComputed = ({
    leftComputerTodo,
    clearCompleted,
    setFilterTodo,
    filter,
}) => {
    return (
        <>
            <section className="dark:bg-VeryDarkDesaturatedBlue text-DarkGrayishBlue mx-auto flex w-[350px] rounded-b-md bg-white p-4 shadow-lg shadow-gray-900/40 md:w-[600px]">
                <span className=" max-[776px]:grow ">
                    {leftComputerTodo} items left
                </span>
                <div className=" m-auto hidden  justify-center gap-4  md:flex">
                    <TodoFilter setFilterTodo={setFilterTodo} filter={filter} />
                </div>
                <button onClick={() => clearCompleted()}>
                    Clear completed
                </button>
            </section>
            <div
                className="dark:bg-VeryDarkDesaturatedBlue text-DarkGrayishBlue container mx-auto mt-8 flex w-[350px] justify-center gap-4 rounded-md bg-white 
            p-4 shadow-lg  shadow-gray-900/40 md:hidden"
            >
                <TodoFilter setFilterTodo={setFilterTodo} filter={filter} />
            </div>
        </>
    );
};
export default TodoComputed;
