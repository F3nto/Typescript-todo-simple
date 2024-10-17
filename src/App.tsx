import AddToForm from "./components/AddToForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import usetodo from "./hooks/usetodo";

const App = () => {
  
  const {todoData, setTodoCompleted, addTodo, deleteTodo,deleteAllCompletedTodo} = usetodo();

  return (
    <main className="py-10 h-screen overflow-y-auto">
      <h1 className="font-bol text-3xl text-center">Your Todo</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <AddToForm onSubmit={addTodo} />
        <TodoList
          todoData={todoData}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary
        todoData={todoData}
        deleteAllCompleted={deleteAllCompletedTodo}
      />
    </main>
  );
};

export default App;
