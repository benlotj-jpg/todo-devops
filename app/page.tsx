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
            <input type="checkbox" checked={t.done} readOnly /> {t.text}{" "}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}