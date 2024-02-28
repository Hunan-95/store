import React from "react";
import "./App.css";
import { BrowserRouter} from "react-router-dom";
import RouterProviders from "./routes";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterProviders/>
      </BrowserRouter>
    </div>
  );
}

export default App;
