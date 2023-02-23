import "./App.css";
import React, { Component } from "react";
import Navbar from "./Component/Navbar";
import Newslist from "./Component/Newslist";
import { BrowserRouter, Routss, Route, Routes } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <h1 className="Head-title display-4">Welocome To ApnaNews</h1>
            <Routes>
              
              <Route
                path="/"
                element=<Newslist
                  category="general"
                  country="in"
                  pageSize="9"
                />
              ></Route>
              <Route
                path="/"
                element=<Newslist category="" country="in" pageSize="9" />
              ></Route>
              <Route
                path="/"
                element=<Newslist
                  category="general"
                  country="in"
                  pageSize="9"
                />
              ></Route>
              <Route
                path="/"
                element=<Newslist
                  category="general"
                  country="in"
                  pageSize="9"
                />
              ></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
