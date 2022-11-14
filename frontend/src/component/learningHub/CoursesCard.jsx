import React, { Component} from "react";
import { coursesCard } from "./data";
import "./learningHub.css"

const ButtonsGroup = () => {
  return (
    <>
    <p className='topic'>
      <h2>TOPIC</h2>
    <div>
      <button className='topic-button'> Basic Concepts</button>
      <button className='topic-button'>SQL Queries</button>
      <button className='topic-button'>Relational Model</button>
      <button className='topic-button'>NoSQL</button>
      
      
    </div>
    <div>&nbsp;</div> 

    <div>
    <button className='topic-button'>File Organizations</button>
    <button className='topic-button'>Basic Concepts</button>
      <button className='topic-button'>SQL Queries</button>
      <button className='topic-button'>Relational Model</button>
      <button className='topic-button'>NoSQL</button>
    </div>
    </p>   
    </>
  );
};
class CoursesCard extends Component {
  render() {
    return (
      <>
      <h1>Course Catalog</h1>
      <ButtonsGroup/>
      <h2>COURSE CATALOG</h2>
      <section className='coursesCard'>
        <div></div>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items'>
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
    </>
    )
    
  }
}
export default CoursesCard