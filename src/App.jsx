import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components

import Home from "./Components/Home";
import Create from "./Components/Create";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Layout children={<Home />} />
        </Route>
        <Route path="/create">
          <Layout children={<Create />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
