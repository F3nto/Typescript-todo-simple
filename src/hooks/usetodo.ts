import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { dummyData } from "../data/todo";

const usetodo = () => {
  const [todoData, setTodoData] = useState(() => {
    const savedTodo: Todo[] = JSON.parse(localStorage.getItem("todo") || "[]");
    return savedTodo.length > 0 ? savedTodo : dummyData;
  });

  const setTodoCompleted = (id: number, completed: boolean) => {
    setTodoData((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const addTodo = (title: string) => {
    setTodoData((prev) => [
      {
        id: Date.now(),
        title,
        completed: false,
      },
      ...prev,
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodoData((prev) => prev.filter((todo) => todo.id !== id));
  };

  const deleteAllCompletedTodo = () => {
    setTodoData((prev) => prev.filter((todo) => !todo.completed));
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoData));
  }, [todoData]);

  return {
    todoData,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodo
  }
};

export default usetodo;
