import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterProviders from "./routes";
import styled from "styled-components";
import { theme } from "./styled/theme";

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppWrapper theme={theme}>
          <RouterProviders />
        </AppWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
