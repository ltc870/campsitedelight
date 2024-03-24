import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import Login from "./components/Login";
// import Register from "./components/Register";
import Access from "./components/Access";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Access />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
