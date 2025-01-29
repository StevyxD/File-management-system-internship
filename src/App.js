import Navbar from "./temp/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Signup from "./pages/Signup";
function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
