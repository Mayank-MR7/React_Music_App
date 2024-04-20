import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Library from "./pages/Library/Library";
import Social from "./pages/Social/Social";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Header from "./components/Header/Header";
import Provider from "./contexts/MusicPlayerContext/Provider";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <div className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/social" element={<Social />} />
            <Route path="/Library" element={<Library />} />
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
