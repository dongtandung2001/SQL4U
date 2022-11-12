import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import React, { Component } from "react";

import NavBar from "./component/navbar/navbar";
import FeatureNavBar from "./component/featureNavBar/featureNavBar";
import Dashboard from "./component/dashboard/dashboard";
import About from "./component/about/about";
import InterviewQuestion from "./component/interview/interview";
import RecommendProject from "./component/project/recommendProject";
import ProjectPage from './component/project/ProjectPage';
import QnA from "./component/qna/q&a";
import LearningHub from "./component/learningHub/learningHub";
import Contact from "./component/contact/contact";
import Login from "./component/login/login";
import Register from "./component/register/register";
import Logout from "./component/logout/logout";
import Profile from "./component/profile/profile";
import NotFound from "./component/not-found/notFound";

class App extends Component {
  state = {user:{}};
  render() {
    return (
      <main className='container'>
        <NavBar />
        {this.state.user && <FeatureNavBar />}

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
          <Route path='/project/projectpage/:id' element={<ProjectPage />}/>
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
