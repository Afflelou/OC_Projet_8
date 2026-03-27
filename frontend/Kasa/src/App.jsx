// App.jsx
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import NotFound from "./NotFound";
import Home from "./Home";
import About from "./About";
import KasaLogo from "./assets/kasa-logo.png";
import KasaFooter from "./assets/kasa-footer.png";

function App() {
  return (
    <body>
      <img src={KasaLogo} alt="Kasa Logo" />

      <BrowserRouter>
        <nav>
          <NavLink to="/" style={({ isActive }) => ({ textDecoration: isActive ? "normal" : "underline" })}>Accueil</NavLink>
          <NavLink to="/about" style={({ isActive }) => ({ textDecoration: isActive ? "normal" : "underline" })}>À propos</NavLink>
        </nav>

        {/* Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>

      <footer>
        <img src={KasaFooter} alt="Kasa Footer" />
      </footer>
    </body>
  );
}

export default App;
