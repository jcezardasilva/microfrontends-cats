import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import GreetingCat from "./components/GreetingCat";
import RandomCat from "./components/RandomCat";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/" element={<RandomCat/>} />
        <Route path="/cat/:greeting" element={<GreetingCat/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;