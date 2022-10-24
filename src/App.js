import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/page-component/Home";
import About from "./components/page-component/About";
import Contact from "./components/page-component/Contact";
import Navbar from "./components/layout-component/navbar-component";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  withRouter
} from "react-router-dom";
import Error from "./components/page-component/Error";
import AddMember from "./components/member-component/add-member-component";
import EditUser from "./components/member-component/edit-member-component";
import User from "./components/member-component/members-component";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route exact="true" path="/about" element={<About />} />
          <Route exact="true" path="/contact" element={<Contact />} />
          <Route exact="true" path="/users/add" element={<AddMember />} />
          <Route exact="true" path="/users/edit/:id" element={<EditUser />} />
          <Route exact="true" path="/users/:id" element={<User />} />
          <Route component={Error} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
