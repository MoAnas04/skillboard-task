import "./App.css";

import { Routes, Route } from "react-router-dom";

import ProfilePage from "./pages/profile-page/profile-page.component";
import HomePage from "./pages/home-page/home-page.component";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
