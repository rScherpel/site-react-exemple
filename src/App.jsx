import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "64px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
