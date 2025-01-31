import "./App.css";
import { useState } from "react";
import Main from "./components/Main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  return (
    <>
      <Sidebar />
      <Header handleSearchChange={handleSearchChange} />
      <Main searchTerm={searchTerm} />

      <Footer />
    </>
  );
}

export default App;
