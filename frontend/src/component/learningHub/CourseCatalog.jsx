import React, { Component, useState} from "react";
import "./learningHub.css";
import {withRouter} from "../withRouter";
import {coursesCard} from "./data";

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
                <img src='../images/courses/c1.png' alt='' />
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
              <>
                    <div className='box'>
                      <div className='dimg'>
                        <img src='./images/team/t4.webp' alt='' />
                      </div>
                      <div className='para'>
                        <h4>{val.name}</h4>
                      </div>
                    </div>
                    <span>{val.totalTime}</span>
                  </>
              </div>
            </div>
          </div>
          <button className='outline-btn'>ENROLL NOW !</button>            </div>
      ))}
    </div>
  </section>
  );
}


function App({location}) {
  const [isShown, setIsShown] = useState("all");
  console.log(location);
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div>
    <button className='topic-button' onClick={() => {setIsShown("all"); handleClick()}}  style={{ backgroundColor: active ? "black" : "white" }}>All</button>
      <button className='topic-button' onClick={() => {setIsShown("basic"); handleClick()}}  style={{ backgroundColor: active ? "black" : "white" }}>Basic Concepts</button>
      <button className='topic-button' onClick={() => setIsShown("sql")}>SQL Queries</button>
      <button className='topic-button' onClick={() => setIsShown("relational_model")}>Relational Model</button>
      {/* 👇️ show elements on click */}
      {isShown==="all" && (
        <div>
          <Show arr={location}/>
        </div>
      )}

      {isShown==="basic" && (
        <div>
          <Show arr={location.filter( course => course.topic ==="basic_concepts" )}/>
        </div>
      )}
    </div>
  );
}

class CoursesCard extends Component {
  state = {data: []};
  componentDidMount() {this.setState({data: coursesCard})}
  render() {
    const location = this.props.location;
    console.log(location);
    return (
      <>
      <div className='topic'>
      <h1>Courses Catalog</h1>
      <App location={this.state.data}/>
    </div>
    </>
    )
  }
}
export default withRouter(CoursesCard)

