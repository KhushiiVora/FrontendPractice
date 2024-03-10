import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Index01 from "./components/01 file explorer/Index";
import Index02 from "./components/02 pagination/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/file-explorer" element={<Index01 />} />
          <Route path="/pagination" element={<Index02 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
