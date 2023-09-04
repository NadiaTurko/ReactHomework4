import React, { useState } from "react";
import { ITEM_COMPLETED, ITEM_PROGRESS } from "../../constants/listConstants";
import "./style.sass";
import ThemeMode from "../ThemeMode/ThemeMode";

export default function List({ list, onDelete, onComplete, themeMode }) {
  const itemClass = (item) => {
    const classes = [];

    classes.push(item.completed ? ITEM_COMPLETED : ITEM_PROGRESS);
    return classes.join(" ");
  };
  const listStyles = {
    // backgroundColor: themeMode === "light" ? "pink" : "black",
    // color: themeMode === "light" ? "black" : "white",
    backgroundColor: themeMode === "light" ? "black" : "pink",
    color: themeMode === "light" ? "white" : "black",
  };

  return list.length ? (
    <table style={listStyles}>
      <thead>
        <tr>
          <th>Task</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <tr key={index}>
            <td className={itemClass(item)}>{item.title}</td>
            <td>
              {item.completed ? (
                <button onClick={() => onDelete(item.id)}>Delete</button>
              ) : (
                <button onClick={() => onComplete(item.id)}>Complete</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
}
