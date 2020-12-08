import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
import ReDesign from "./pages/ReDesign";
import Development from "./pages/Development";
import Iterative from "./pages/Iterative";
import BouncyBalls from "./pages/BouncyBalls";

const Main = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/experience" component={Jobs} />
	<Route path="/redesign" component={ReDesign} />
	<Route path="/development" component={Development} />
	<Route path="/iterative" component={Iterative} />
	<Route path="/bouncyballs" component={BouncyBalls} />
    <Route path="/projects" component={Projects} />
    <Route path="/blog" component={Blog} />
    <Route path="/contact" component={Contact} />
  </>
);

export default Main;
