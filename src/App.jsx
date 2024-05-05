import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Index01 from "./components/01 file explorer/Index";
import Index02 from "./components/02 pagination/Index";
import Index03 from "./components/03 password generator/Index";
import Index04 from "./components/04 progress bar/Index";
import Index05 from "./components/05 grid lights/Index";
import Index06 from "./components/06 LRU cache/Index";
import Index07 from "./components/07 like button/Index";
import Index08 from "./components/08 use effect polyfill/Index";
import Index09 from "./components/09 light dark theme/Index";

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
          <Route path="/grid-lights" element={<Index05 />} />
          <Route path="/lru-cache-simulation" element={<Index06 />} />
          <Route path="/like-button" element={<Index07 />} />
          <Route path="/useeffect-polyfill" element={<Index08 />} />
          <Route path="/theme/*" element={<Index09 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
