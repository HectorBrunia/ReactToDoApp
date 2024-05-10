import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");
    const handleSumbitAddTodo = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            return setTitle("");
        }
        createTodo(title);
        setTitle("");
    };
    return (
        <form
            onSubmit={handleSumbitAddTodo}
            className="dark:bg-VeryDarkDesaturatedBlue mx-auto mt-10 flex  w-[350px] gap-4 overflow-hidden rounded-xl bg-white p-4 md:w-[600px]"
        >
            <span className="h-6 w-7 rounded-full border-2 border-gray-300 dark:border-gray-500"></span>
            <input
                className="dark:bg-VeryDarkDesaturatedBlue w-full text-gray-300 outline-none"
                type="text"
                placeholder="Crea tu nueva tarea"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};
export default TodoCreate;
