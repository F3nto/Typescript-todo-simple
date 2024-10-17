import { useState } from "react";

interface AddToFormProps {
  onSubmit: (title: string) => void;
}

const AddToForm = ({ onSubmit }: AddToFormProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input);
    setInput("");
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        value={input}
        placeholder="What needs to be done?"
        className="rounded-s-md grow border-gray-400 p-2"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="w-16 rounded-e-md bg-slate-900 hover:bg-slate-800 text-white"
      >
        Add
      </button>
    </form>
  );
};

export default AddToForm;
