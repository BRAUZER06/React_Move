import React from "react";
import "./normalize.css";
import "./App.css";
import Header from "./components/Header/Header";
import Section from "./pages/Section/Section";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate;
  React.useEffect(() => {
    // alert("Ограничение в api не дали реализовать весь потенциал  :)");
  }, []);
  navigate("/");

  return (
    <div className="App">
      <Header />

      <Section />
    </div>
  );
}

export default App;
