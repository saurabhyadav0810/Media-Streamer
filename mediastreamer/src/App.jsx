import Watch from "./pages/Watch";
import Upload from "./pages/Upload";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Search from "./pages/Search";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;