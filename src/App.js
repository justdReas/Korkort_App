import logo from "./img/right2drive.png";
import "./App.css";
import "./input.css";

function App() {
  return (
    <div className="wrapper">
      <nav>
        <img src={logo} className="logo" alt="logo" />
      </nav>
      <div className="hero">
        <h1 className="header">
          Tailwind CSS makes styling React components easier!
        </h1>
      </div>
    </div>
  );
}

export default App;
