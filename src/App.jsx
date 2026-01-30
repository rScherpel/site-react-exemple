import Header from "./pages/pageComponents/Header";
import Footer from "./pages/pageComponents/Footer";
import Body from "./pages/Body";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
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
