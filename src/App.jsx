import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Index01 from "./components/01 file explorer/Index";
import Index02 from "./components/02 pagination/Index";
import Index03 from "./components/03 password generator/Index";
import Index04 from "./components/04 progress bar/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/file-explorer" element={<Index01 />} />
          <Route path="/pagination" element={<Index02 />} />
          <Route path="/password-generator" element={<Index03 />} />
          <Route path="/progress-bar" element={<Index04 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
