import { Todo } from "../types/todo";

interface TodoSummaryProps {
  todoData: Todo[];
  deleteAllCompleted: () => void;
}

const TodoSummary = ({ todoData, deleteAllCompleted }: TodoSummaryProps) => {
  const completedTodo = todoData.filter((todo) => todo.completed);

  return (
    <div className="mt-3 text-center space-y-2">
      <p className="text-sm font-medium">
        {completedTodo.length}/{todoData.length} todos completed!!!
      </p>
      {completedTodo.length > 0 && (
        <button 
        onClick={deleteAllCompleted}
        className="text-red-500 hover:underline text-sm font-medium"
        >
            Delete All Completed
        </button>
      )}
    </div>
  );
};

export default TodoSummary;
