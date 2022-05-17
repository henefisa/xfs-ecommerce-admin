import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading";
import Router from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
