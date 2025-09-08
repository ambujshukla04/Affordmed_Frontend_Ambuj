import { BrowserRouter, Routes, Route } from "react-router-dom";
import UrlForm from "./components/UrlForm";
import StatsPage from "./components/StatsPage";
import RedirectHandler from "./components/RedirectHandler";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UrlForm />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/:shortcode" element={<RedirectHandler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
