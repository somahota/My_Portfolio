import React from "react";
import Avatar from "../components/Avatar";
import Title from "../components/Title";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <header className="pt-5 mt0" style={{ height: "90vh" }}>
      <div className="container">
        <div className="pt-5 m-auto row">
          <div className="col-lg">
            <Avatar avatarClass="leftAvatar" />
          </div>
          <div className="col-lg">
            <Title title="Contact" textAlignment="left" marginAlignment="0" />
            <div className="mt-5">
              Have a question? Please feel free to reach out!
              <br></br>
              <br></br>Additionally, you can directly send me an email at <span className ="highlight2"> nerd_queen@brown.edu</span>
              or just hit on any of the links below to visit my social media handles.
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </header>
  );
}
