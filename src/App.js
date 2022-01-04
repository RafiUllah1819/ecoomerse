import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import AllPosts from "./pages/AllPosts";
import SingleRecord from "./components/singleRecord/SingleRecord";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/singleRecord/:id" component={SingleRecord} />
        <Route path="/posts" component={AllPosts} />
      </Switch>
    </Router>
  );
}

export default App;
