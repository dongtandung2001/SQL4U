import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import React, { Component } from "react";
import NavBar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import FeatureNavBar from "./component/featureNavBar/featureNavBar";
import Dashboard from "./component/dashboard/dashboard";
import About from "./component/about/about";
import InterviewQuestion from "./component/interview/interview";
import ProjectLandingPage from "./component/project/ProjectLandingPage";
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
import PrivateRoutes from "./component/protectedRoutes";
import QuestionAndAnswer from "./component/qna/QuestionAndAnswer";
import ProjectForm from "./component/project/projectForm";
import TutorialForm from "./component/learningHub/TutorialForm";
import InterviewQuestionForm from "./component/interview/questionForm";

import auth from "./services/authService";
import CreatePost from "./component/qna/CreatePost";
import IndividualProject from "./component/project/IndividualProject";

class App extends Component {
  state = {};
  async componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    return (
      <main
        style={{ paddingLeft: "0", paddingRight: "0" }}
        className="container-fluid"
      >
        <header>
          <NavBar user={this.state.user} />
          {this.state.user && <FeatureNavBar />}
        </header>

        <article>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<CoursesCard />} path='/' />

              <Route path='/interview' element={<InterviewQuestion />} />
              <Route path='/interview/:id' element={<InterviewQuestionForm />} />
              {/* Catalog */}
              <Route path='/catalog' element={<CoursesCard />} />
              <Route path='/catalog/:courseId' element={<IndividualCourse />} />
              <Route
                path='/catalog/:courseId/project'
                element={<RecommendProject />}
              />
              <Route
                path='/catalog/:courseId/project'
                element={<IndividualProject />}
              />
              <Route
                path='/catalog/:courseId/project/add/:id'
                element={<ProjectForm />}
              />
              <Route
                path='/catalog/:courseId/tutorial/add/:id'
                element={<TutorialForm />}
              />
              <Route path='/catalog/addOrEdit/:id' element={<CourseForm />} />
              <Route 
                path='/catalog/:courseId/project/:projectId' 
                element={<ProjectPage />} 
                />
              <Route
                path='/catalog/:courseId/tutorial/:tutorialId'
                element={<TutorialPage />}
              />
              {/* Project */}
              <Route
                path='/projectLandingPage'
                element={<ProjectLandingPage />}
              />
              <Route
                path='/projectLandingPage/:courseId/project'
                element={<RecommendProject />}
              />
              
              <Route
                path='/projectLandingPage/:courseId/project/:projectId'
                element={<ProjectPage />}
              />
              

              <Route path='/qna' element={<QnA />} />
              <Route path='/qna/:id' element={<QuestionAndAnswer />} />
              <Route path='/qna/edit/:id' element={<CreatePost />} />

              <Route path='/hub' element={<LearningHub />} />
            </Route>
            {/* <Route path='/' element={<Dashboard />} /> */}
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />

            <Route path='/logout' element={<Logout />} />
            <Route path='/profile' element={<Dashboard />} />

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/not-found' element={<NotFound />} />

            <Route path='/' element={<Navigate to={"/"} />} />
            <Route path='*' element={<Navigate to={"not-found"} />} />
          </Routes>
        </article>

        <footer>
          <Footer />
        </footer>

      </main>
    );
  }
}

export default App;
