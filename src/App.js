
import PostForm from "./components/PostForm";
import "./App.css";
import "./input.css";
import "./components/form.css";

import Spline from "@splinetool/react-spline";
import { FooterContainer } from "./containers/footer.js";



function App() {
  
  return (
    <div className="wrapper">
      <nav className="bg-gradient-to-r from-cyan-400 to-blue-400">
        <Spline
        mode="no-cors"
          className="car"
          scene="https://prod.spline.design/xXq89CAzYxe9LNrY/scene.splinecode"
        />
      </nav>  
      <PostForm />
      <FooterContainer />     
    </div>
  );
}

export default App;