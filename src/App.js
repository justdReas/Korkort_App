import Login from "./components/Login.js";
import "./App.css";
import "./input.css";

import Spline from "@splinetool/react-spline";

function App() {
  return (
    <div className="wrapper">
      <nav className="bg-secondary">
        <Spline
          className="car"
          scene="https://prod.spline.design/xXq89CAzYxe9LNrY/scene.splinecode"
        />
      </nav>
      <div className="hero">
      <Login />
      </div>
    </div>
  );
}

export default App;
