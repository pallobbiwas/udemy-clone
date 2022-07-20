import { Route, Routes } from "react-router-dom";
import "./App.css";
import Allabout from "./components/about/Allabout";
import UsgUdemy from "./components/usgUdemy/UsgUdemy";
import Blogs from "./components/blog/Blogs"
import Comapny from "./components/company/Comapny"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Allabout />}></Route>
        <Route path="/about" element={<Allabout />}></Route>
        <Route path="/usgudemy" element={<UsgUdemy />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/company" element={<Comapny />}></Route>
      </Routes>
    </div>
  );
}

export default App;
