"use client";
import { useState } from "react";

type Task = { id: number; text: string; done: boolean };

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Finish assignment", done: false },
    { id: 2, text: "Study Next.js", done: false },
    { id: 3, text: "Setup Git repository", done: true },
  ]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input.trim(), done: false }]);
    setInput("");
  };

  const toggleTask = (id: number) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  return (
    <main style={{ maxWidth: 500, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>TODO APPLICATION</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={addTask}>Add Task</button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => toggleTask(t.id)}
            />{" "}
            <span style={{ textDecoration: t.done ? "line-through" : "none" }}>
              {t.text}
            </span>{" "}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}