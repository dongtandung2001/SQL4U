import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import React, { Component } from "react";

import NavBar from "./component/navbar";
import FeatureNavBar from "./component/featureNavBar";
import Dashboard from "./component/dashboard";
import About from "./component/about";
import InterviewQuestion from "./component/interview";
import RecommendProject from "./component/recommendProject";
import QnA from "./component/q&a";
import LearningHub from "./component/learningHub";
import Contact from "./component/contact";
import Login from "./component/login";
import Register from "./component/register";
import Logout from "./component/logout";
import Profile from "./component/profile";
import NotFound from "./component/notFound";

class App extends Component {
  state = {};
  render() {
    return (
      <main className='container'>
        <NavBar />
        <FeatureNavBar />

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/profile' element={<Profile />} />

          <Route path='/interview' element={<InterviewQuestion />} />
          <Route path='/project' element={<RecommendProject />} />
          <Route path='/qna' element={<QnA />} />
          <Route path='/hub' element={<LearningHub />} />
          <Route path='/not-found' element={<NotFound />} />

          <Route path='/' element={<Navigate to={"/"} />} />
          <Route path='*' element={<Navigate to={"not-found"} />} />
        </Routes>
      </main>
    );
  }
}

export default App;
