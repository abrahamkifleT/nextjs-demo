import React from "react";
import Hello from "../components/hello";

const Home = () => {
  console.log("what type of component am i?");
  return (
    <main>
      <div className="text-5xl underline">Welcome to Nest.js!</div>
      <Hello />
    </main>
  );
};

export default Home;
