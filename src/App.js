import React from "react";
import "./normalize.css";
import "./App.css";
import Header from "./components/Header/Header";
import Section from "./pages/Section/Section";

function App() {
  React.useEffect(() => {
    alert("Сайт еще в процессе");
  }, []);
  return (
    <div className="App">
      <Header />

      <Section />
    </div>
  );
}

export default App;
