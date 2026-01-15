import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import PrivacyPolicy from "./PrivacyPolicy";

export default function Body() {
  return(    
    <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        </Routes>
    </main>
    )
}