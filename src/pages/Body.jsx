import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contacts from "./Contacts";
import PrivacyPolicy from "./PrivacyPolicy";

export default function Body() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </main>
  );
}
  