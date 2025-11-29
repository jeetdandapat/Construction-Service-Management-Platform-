import React from "react";
import Router from "./router";
import useScrollReveal from "./hooks/useScrollReveal";

export default function App() {

  // GLOBAL SCROLL ANIMATION ACTIVE
  useScrollReveal();

  return <Router />;
}
