import Header from "./pages/pageComponents/Header";
import Footer from "./pages/pageComponents/Footer";
import Body from "./pages/Body";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Body />
      </main>
      <Footer />
    </div>
  );
}

export default App;
