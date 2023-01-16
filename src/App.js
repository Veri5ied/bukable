import "./App.scss";
import { HOME } from "./routes";
import { Home } from "./pages";
import { Route, Routes } from "react-router-dom";
import TopNavigation from "./ui/TopNavigation";

function App() {
  return (
    <div className="container">
      <TopNavigation />
      <Routes>
        <Route path={HOME} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
