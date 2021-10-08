import React from "react";
import "../assets/css/templatemo-onix-digital.css";
import "../assets/css/animated.css";
import "../assets/css/fontawesome.css";
import "./navigation.css";
import Home from "./home";
import Services from "./services/services";
import Seo from "./seo/seo";
import Plan from "./plan/plan";
import Email from "./email";
import Form from "./form";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "../assets/images/logo.png";
class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <div className="pos">
          <header
            class="header-area header-sticky wow slideInDown "
            data-wow-duration="0.75s"
            data-wow-delay="0s"
          >
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <nav class="main-nav">
                    <a href="index.html" class="logo">
                      <img src={logo} alt="logo" />
                    </a>

                    <ul class="nav">
                      <li class="scroll-to-section">
                        <Link to="/" class="active">
                          Home
                        </Link>
                      </li>
                      <li class="scroll-to-section">
                        <Link to="/services">Services</Link>
                      </li>
                      <li class="scroll-to-section">
                        <Link to="/seo">SEO</Link>
                      </li>
                      <li class="scroll-to-section">
                        <Link to="/plan">PLAN</Link>
                      </li>
                      <li class="scroll-to-section">
                        <Link to="/email">Email</Link>
                      </li>
                      <li class="scroll-to-section">
                        <Link to="/form">Form</Link>
                      </li>
                      <li class="scroll-to-section">
                        <div class="main-red-button-hover">
                          <a href="#contact">Contact Us Now</a>
                        </div>
                      </li>
                    </ul>
                    <a class="menu-trigger" href="menu">
                      <span>Menu</span>
                    </a>
                  </nav>

                  <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route path="/services">
                      <Services />
                    </Route>
                    <Route path="/seo">
                      <Seo />
                    </Route>
                    <Route path="/plan">
                      <Plan />
                    </Route>
                    <Route path="/email">
                      <Email />
                    </Route>
                    <Route path="/form">
                      <Form />
                    </Route>
                  </Switch>
                </div>
              </div>
            </div>
          </header>
        </div>
      </Router>
    );
  }
}

export default Navigation;
