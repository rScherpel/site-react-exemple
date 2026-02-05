import Header from "./pages/pageComponents/Header";
import Footer from "./pages/pageComponents/Footer";
import Body from "./pages/Body";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider>
      <Toaster position="top-center" />
      
      <div className="app">
        <Header />
        <main>
          <Body />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
