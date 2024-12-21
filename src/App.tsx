import React from "react";
import { Buffer } from "buffer";
window.Buffer = Buffer;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./utilities/utilities.css";

import { ThemeProvider } from "@dannychambers/bateson-web-components";

{
  /* -- Page imports -- */
}
import Home from "./00_pages/home/index";

const App: React.FC = () => {
  return (
    <ThemeProvider theme="EngineeredArts">
      <Router>
        <Routes>
          {/* -- Page routes -- */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
