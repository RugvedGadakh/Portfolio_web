import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404"



import "./App.css";

function App() {


  return (
    <div className="App">
      <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Articles />} />
          <Route path="/article/:slug" element={<ReadArticle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
