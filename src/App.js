import React, { useState } from "react";
import List from "./components/List/List";
import Statistics from "./components/Statistics/Statistics";
import ThemeMode from "./components/ThemeMode/ThemeMode";

export default function App() {
  const [list, setList] = useState([
    { title: "incidunt numquam alias", completed: true, rating: 26, id: "4" },
    {
      title: "eligendi porro voluptates",
      completed: true,
      rating: 68,
      id: "5",
    },
    { title: "rerum accusantium fugiat", completed: true, rating: 34, id: "6" },
    {
      title: "eligendi ipsum distinctio",
      completed: false,
      rating: 22,
      id: "7",
    },
    { title: "reiciendis neque amet", completed: true, rating: 83, id: "8" },
    {
      title: "ipsum laudantium asperiores",
      completed: true,
      rating: 91,
      id: "9",
    },
    { title: "rem tempora fugit", completed: false, rating: 51, id: "10" },
    { title: "Todo 89898", completed: false, rating: 47, id: "11" },
    { title: "Todo Hello", completed: true, rating: 7, id: "12" },
    { title: "Todo 3000", completed: false, rating: 79, id: "13" },
    { title: "Todo Success", completed: true, rating: 69, id: "14" },
    { title: "Todo NEW!!!!", completed: false, rating: 6, id: "16" },
  ]);
  const handleDeleteClick = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const handleCompleteClick = (id) => {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, completed: true } : item
    );
    setList(updatedList);
  };
  return (
    <>
      <h1>Todo App</h1>
      <ThemeMode></ThemeMode>
      <Statistics list={list} />
      <List
        list={list}
        onDelete={handleDeleteClick}
        onComplete={handleCompleteClick}
      />
    </>
  );
}
