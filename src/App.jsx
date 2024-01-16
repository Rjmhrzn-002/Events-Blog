import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components

import Home from "./Components/Home";
import Create from "./Components/Create";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout children={<Home />} />} />
        <Route path="/create" element={<Layout children={<Create />} />} />
      </Routes>
    </Router>
  );
}

export default App;
