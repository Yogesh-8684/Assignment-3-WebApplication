import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./header";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import "./styles.css";
import "./home.css";
// import "./profile2.jpg";


export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tools" component={About} />
          <Route path="/service" component={Contact} />
          <Route path="/about" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => {

  const [message, setMessage] = useState('Yogesh');

  useEffect(() => {
    console.log('trigger use effect hook');

    setTimeout(() => {
      setMessage("Yogesh kumar.");
    }, 4000)
  })
    const imagePath = "url(" + require("./images/yogesh.jpg") + ")";
    return (
      <div className="about-container">
        <div className="about">
          <div className="image" style={{ backgroundImage: imagePath }} />
        
          <p>
          I'm <span style={{color:'#FF0000'}}>{message}</span> Student of Computer Science. Ever since I got into the field I
          really enjoy developing websites , Especially front-end Sites. I'm
          good at html5 and css3. I know the fundamentals of Javascript. I have
          created many vanilla Js projects and I have solved real world
          problems. Right now I am learning Front-end Framework , React Js.
        </p>
        </div>
       
      </div>
  );
};
