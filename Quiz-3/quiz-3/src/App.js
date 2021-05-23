import React from "react";
import "./assets/style.css";
import Navbar from "./component/Route/Routes";
import Footer from "./component/Footer";
import { LoginProvider } from "./component/Route/LoginContext";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Navbar />
        <Footer />
      </LoginProvider>
    </div>
  );
}

export default App;
