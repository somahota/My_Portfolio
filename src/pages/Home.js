import React from "react";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <header className="pt-5 mt0" style={{ height: "90vh" }}>
      <div className="container">
        <div className="col-lg">
          <Avatar />
        </div>
        <div className="col-lg" style={{ textAlign: "center" }}>
          <h1>
            Hi, I am <span className="name"><b>Nerd Queen</b></span>
          </h1>
          <h4 style={{ fontSize: "1rem" }}>Welcome to my portfolio</h4>
        </div>
        <Footer />
      </div>
    </header>
  );
}
