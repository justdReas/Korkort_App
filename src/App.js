import logo from "./img/right2drive.png";
import "./App.css";
import "./input.css";

import Spline from "@splinetool/react-spline";

function App() {
  return (
    <div className="wrapper">
      <nav className="bg-secondary">
        <Spline scene="https://prod.spline.design/xXq89CAzYxe9LNrY/scene.splinecode" />
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
