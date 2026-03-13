// App.jsx
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// Pages simples
function Home() {
  return <h1>Accueil</h1>;
}

function About() {
  return <h1>À propos de nous</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" style={({ isActive }) => ({ textDecoration: isActive ? "normal" : "underline" })}>Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </nav>

      {/* Routes */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h2>404 - Page non trouvée</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
