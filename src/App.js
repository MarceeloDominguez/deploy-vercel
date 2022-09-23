import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NewPage from "./NewPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
