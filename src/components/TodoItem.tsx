import { Todo } from "../types/todo";
import { Trash2 } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange : (id : number, completed : boolean) => void;
  onDelete : (id : number) => void;
}

const TodoItem = ({ todo, onCompletedChange, onDelete}: TodoItemProps) => {
  return (
    <div className="flex items-center gap-1 mt-10">
             
      <label className="grow flex items-center gap-2 border border-gray-400 rounded-md p-2 bg-white hover:bg-slate-50">
        <input
        checked={todo.completed} 
        type="checkbox"
        onChange={e => onCompletedChange(todo.id ,e.target.checked)}
        className="scale-125" />

        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </label>

      <button
      onClick={() => onDelete(todo.id)}
      className="p-2"
      >
        <Trash2 size={20} className="text-gray-500" />
      </button>
    </div>
  );
};

export default TodoItem;
