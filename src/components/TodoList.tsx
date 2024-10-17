import TodoItem from "./TodoItem";
import { Todo } from "../types/todo";

interface TodoListProps {
  todoData: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({ todoData, onCompletedChange, onDelete }: TodoListProps) => {
  const todoSorted = [...todoData].sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className="space-y-2">
        {todoSorted.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompletedChange={onCompletedChange}
            onDelete={onDelete}
          />
        ))}
      </div>
      {todoData.length === 0 && (
        <p className="mt-5 text-center text-sm text-gray-500">
          No todo yet. Add a new one above...
        </p>
      )}
    </>
  );
};

export default TodoList;
