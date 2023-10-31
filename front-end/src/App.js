import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Analytics from "./Pages/Analytics";
import Data from "./Pages/Data";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Analytics />}></Route>
          <Route path="/data" element={<Data />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
