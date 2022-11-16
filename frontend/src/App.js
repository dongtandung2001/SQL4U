import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import React, { Component } from "react";
import NavBar from "./component/navbar/navbar";
import FeatureNavBar from "./component/featureNavBar/featureNavBar";
import Dashboard from "./component/dashboard/dashboard";
import About from "./component/about/about";
import InterviewQuestion from "./component/interview/interview";
import RecommendProject from "./component/project/recommendProject";
import ProjectPage from "./component/project/ProjectPage";
import QnA from "./component/qna/q&a";
import LearningHub from "./component/learningHub/learningHub";
import CoursesCard from "./component/learningHub/CourseCatalog";
import IndividualCourse from "./component/learningHub/IndividualCourse";
import TutorialPage from "./component/learningHub/TutorialPage";
import Contact from "./component/contact/contact";
import Login from "./component/login/login";
import Register from "./component/register/register";
import Logout from "./component/logout/logout";
import Profile from "./component/profile/profile";
import NotFound from "./component/not-found/notFound";
import CourseForm from "./component/learningHub/CourseForm";
import auth from "./services/authService";
import PrivateRoutes from "./component/protectedRoutes";




class App extends Component {
  state = {};
  async componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    return (
      <main style={{paddingLeft: "0", paddingRight: "0"}} className='container-fluid'>
        <NavBar user={this.state.user} />
        {this.state.user && <FeatureNavBar />}

        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Dashboard />} path='/' />
          </Route>
          {/* <Route path='/' element={<Dashboard />} /> */}
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/profile' element={<Profile />} />

          <Route path='/interview' element={<InterviewQuestion />} />
          <Route path='/catalog/:courseId/project' element={<RecommendProject />} />
          <Route path='/catalog/:courseId/project/:projectId' element={<ProjectPage />} />
          <Route path='/qna' element={<QnA />} />

          <Route path='/hub' element={<LearningHub />} />

          <Route path='/catalog/add/:id' element={<CourseForm />} />
          <Route path='/catalog/:courseId' element={<IndividualCourse />} />
          <Route
            path='/catalog/:courseId/tutorial/:tutorialId'
            element={<TutorialPage />}
          />

          <Route path='/catalog' element={<CoursesCard />} />
          <Route path='/not-found' element={<NotFound />} />

          <Route path='/' element={<Navigate to={"/"} />} />
          <Route path='*' element={<Navigate to={"not-found"} />} />
        </Routes>
      </main>
    );
  }
}

export default App;
