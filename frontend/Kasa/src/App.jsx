// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import KasaHeader from "./components/header/header";
import KasaFooter from "./components/footer/footer";

function App() {
  return (
    <body>
      <BrowserRouter>
        <KasaHeader />
        {/* Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
      <KasaFooter />
    </body>
  );
}

export default App;
