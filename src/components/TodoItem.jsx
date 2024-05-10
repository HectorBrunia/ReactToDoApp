import Cross from "./icons/Cross";
import Check from "./icons/Check";
import React from "react";
const TodoItem = React.forwardRef(
  ({ todo, updateTodo, removeTodo, ...props }, ref) => {
    const { id, title, completed } = todo;
    return (
      <article
        {...props}
        ref={ref}
        className=" dark:bg-VeryDarkDesaturatedBlue dark:border-VeryDarkGrayishBlue bg-VeryLightGray 
                flex items-center justify-center  gap-4  border-b-[1px]"
      >
        <button
          className={`h-6 w-6 rounded-full   
                ${
                  completed
                    ? "  from-checkRigth to-checkLeft flex items-center justify-center bg-gradient-to-r"
                    : "dark:border-VeryDarkGrayishBlue border-[1px] "
                }`}
          onClick={() => updateTodo(id)}
        >
          {completed && <Check />}
        </button>
        <p
          className={`w-10 grow text-ellipsis  ${
            completed
              ? "dark:text-VeryDarkGrayishBlue  text-LightGrayishBlue  line-through"
              : "dark:text-LightGrayishBlue text-VeryDarkBlue"
          }`}
        >
          {title}
        </p>
        <button className="flex-none" onClick={() => removeTodo(id)}>
          <Cross />
        </button>
      </article>
    );
  }
);

export default TodoItem;
