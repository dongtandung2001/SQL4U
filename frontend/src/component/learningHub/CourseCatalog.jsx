import React, { Component, useState} from "react";
import "./learningHub.css";


const myArray = ['all', 'basic_concepts', 'sql_queries', 'relational_model'];
const basic_concepts = [
  {
    id: 1,
    cover: "./images/courses/c1.png",
    coursesName: "Database Foundations: Intro to Databases",
    courTeacher: [
      {
        dcover: "./images/team/t1.webp",
        name: "by Adam Wilbert",
        totalTime: "50 lectures (3h 21m)",
      },
    ],
  },
  {
    id: 2,
    cover: "../images/courses/c2.png",
    coursesName: "Database Foundations: Data Structures",
    courTeacher: [
      {
          dcover: "./images/team/t2.webp",
          name: "by Adam Wilbert",
        totalTime: "30 lectures (2h 55m)",
      },
    ],
  },
  {
    id: 3,
    cover: "../images/courses/c3.png",
    coursesName: "Database Foundations: Database Management",
    courTeacher: [
      {
          dcover: "./images/team/t3.webp",
          name: "by Adam Wilbert",
        totalTime: "50 lectures (2h 14m)",
      },
    ],
  }
];

const sql_queries = [{
  id: 4,
  cover: "../images/courses/c4.png",
  coursesName: "Database Foundations: Administration",
  courTeacher: [
    {
        dcover: "./images/team/t4.webp",
        name: "by Adam Wilbert",
      totalTime: "20 lectures (2h 7m)",
    },
  ],
},
{
  id: 5,
  cover: "../images/courses/c5.png",
  coursesName: "Database Foundations: Application Development",
  courTeacher: [
    {
        dcover: "./images/team/t5.webp",
        name: "by Adam Wilbert",
      totalTime: "10 lectures (1h 49m)",
    },
  ],
},
{
  id: 6,
  cover: "../images/courses/c6.png",
  coursesName: "Learn SQL",
  courTeacher: [
    {
      dcover: "./images/team/t6.webp",
      name: "by Sunil Bishowkaram",
      totalTime: "20 lectures (2h 22m)",
    },
  ],
}];

const relational_model =[{
  id: 7,
  cover: "../images/courses/c7.png",
  coursesName: "MySQL Essential Training",
  courTeacher: [
    {
      dcover: "./images/team/t7.webp",
      name: "by Price",
      totalTime: "20 lectures (1h 11m)",
    },
  ],
},
{
  id: 8,
  cover: "../images/courses/c8.png",
  coursesName: "Learning Relational Databases",
  courTeacher: [
    {
      dcover: "./images/team/t8.webp",
      name: "by Petter",
      totalTime: "25 lectures (3h 33m)",
    },
  ],
},
{
  id: 9,
  cover: "../images/courses/c9.png",
  coursesName: "Intermediate SQL for Data Scientists",
  courTeacher: [
    {
      dcover: "./images/team/t1.webp",
      name: "by Petter",
      totalTime: "50 lectures (5h 05m)",
    },
  ],
}];

function Show({arr}){
  return (
    <section className='coursesCard'>
    <div></div>
    <div className='container grid2'>
      {arr.map((val) => (
        <div key={val.id} className='items'>
          <div className='content flex'>
            <div className='left'>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
            </div>
            <div className='text'>
              <h1>{val.coursesName}</h1>
              <div className='rate'>
                <i className='fa fa-star blue'></i>
                <i className='fa fa-star blue'></i>
                <i className='fa fa-star blue'></i>
                <i className='fa fa-star blue'></i>
                <i className='fa fa-star blue'></i>
                <label htmlFor=''  >(5.0)</label>
              </div>
              <div className='details'>
                {val.courTeacher.map((details) => (
                  <>
                    <div className='box'>
                      <div className='dimg'>
                        <img src={details.dcover} alt='' />
                      </div>
                      <div className='para'>
                        <h4>{details.name}</h4>
                      </div>
                    </div>
                    <span>{details.totalTime}</span>
                  </>
                ))}
              </div>
            </div>
          </div>
          <button className='outline-btn'>ENROLL NOW !</button>            </div>
      ))}
    </div>
  </section>
  );
}

function App() {
  const [isShown, setIsShown] = useState(myArray[0]);
  return (
    <div>
      <button className='topic-button' onClick={() => setIsShown(myArray[0])}>All</button>
      <button className='topic-button' onClick={() => setIsShown(myArray[1])}>Basic Concepts</button>
      <button className='topic-button' onClick={() => setIsShown(myArray[2])}>SQL Queries</button>
      <button className='topic-button' onClick={() => setIsShown(myArray[3])}>Relational Model</button>
      {/* 👇️ show elements on click */}
      {isShown===myArray[0] && (
        <div>
          <Show arr={basic_concepts} />
          <Show arr={sql_queries} />
          <Show arr={relational_model} />
        </div>
      )}
      {isShown===myArray[1] && (
        <div>
          <Show arr={basic_concepts} />
        </div>
      )}
{isShown===myArray[2] && (
        <div>
         <Show arr={sql_queries} />
        </div>
      )}
      
      {isShown===myArray[3] && (
        <div>
        <Show arr={relational_model} />
        </div>
      )}
    </div>
  );
}

class CoursesCard extends Component {
  render() {
    return (
      <>
      <div className='topic'>
      <h2>TOPIC</h2>
      <App/>
    </div>
    </>
    )
  }
}
export default CoursesCard

