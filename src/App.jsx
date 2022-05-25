import React from "react";

import GlobalStyle from "./styles/GlobalStyle";
import { TaskProvider } from "./context/TaskContext.jsx";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {

  return (
    <TaskProvider>
      <GlobalStyle />
      <Header />
      <Main />
    </TaskProvider>
  );
}

export default App;