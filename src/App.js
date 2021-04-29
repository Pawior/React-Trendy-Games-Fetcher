import React, { useEffect } from "react";
import GlobalStyles from "./components/Globalstyles";
import Home from "./pages/Home";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={[`/game/:id`, "/"]}>
        <Home></Home>
      </Route>
    </div>
  );
}

export default App;
