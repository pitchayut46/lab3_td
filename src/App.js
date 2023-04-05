import "./style/App.css";
import React from "react";
import CalendarPage from "./pages/Calendar";
import HomePage from "./pages/Homepage";
import TodayPage from "./pages/Todaypage";
import TodoPage from "./pages/TodoPage";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
  );
}

export default App;