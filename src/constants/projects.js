import project1 from "../blog1.jpeg";
import project2 from "../project2.png";
import project3 from "../project3.gif";
import bouncy from "../bouncy.gif";
import project5 from "../blog2.PNG";
import react from "../react.gif";
import redesign from "../redesign.gif";
import iterative from "../iterative.gif";

const projects = [
  {
    id: 1,
    cardItemTitle: "Website ReDesign Project",
    cardItemContent:
      "This project aims to redesign a website focussing on usability and accessibility.",
    buttons: ["JAVASCRIPT", "BOOTSTRAP"],
    cardItemDate: "Oct 30, 2020",
    cardItemImage: redesign,
	course: "UI-UX",
	item: "{REDESIGN}",
    cardItemFooterUrl: "redesign"
  },
  {
    id: 2,
    cardItemTitle: "Website Development",
    cardItemContent:
      "This project is about building an interactive website that performs filtering and sorting using REACT",
    buttons: ["REACT"],
    cardItemDate: "Nov 28, 2020",
    cardItemImage: react,
	course: "UI-UX",
    item: "{DEVELOPMENT}",
    cardItemFooterUrl: "development"
  },
  {
    id: 3,
    cardItemTitle: "Iterative Design Project",
    cardItemContent: "A prototype app of a Y-Combinator startup, Ilk",
    buttons: ["FIGMA"],
    cardItemDate: "Nov 7, 2020",
    cardItemImage: iterative,
	course: "UI-UX",
	item: "{ITERATIVE}",
    cardItemFooterUrl: "iterative"
  },
  {
    id: 4,
    cardItemTitle: "Bouncy Balls",
    cardItemContent: "An interactive bouncy balls game",
    buttons: ["JAVA"],
    cardItemDate: "SEP 17, 2020",
    cardItemImage: bouncy,
	course: "SWE",
  item: "{BOUNCYBALLS}",
    cardItemFooterUrl: "bouncy"
  }
];

export default projects;
