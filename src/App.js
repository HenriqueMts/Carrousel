import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carrousel";

function App() {
  return (
    <div className="testdiv">
      <Carousel>
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
      </Carousel>
    </div>
  );
}

export default App;
