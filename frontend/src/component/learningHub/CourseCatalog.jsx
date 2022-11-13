import React, { Component, useState} from "react";
import { coursesCard } from "./data";
import "./learningHub.css";


const myArray = ['basic_concepts', 'sql_queries', 'relational_model'];

function App() {
  const [isShown, setIsShown] = useState(myArray[0]);

  // const handleClick = event => {
  //   // 👇️ toggle shown state
  //   setIsShown(current => !current);

  //   // 👇️ or simply set it to true
  //   // setIsShown(true);
  // };

  return (
    <div>
      <button className='topic-button' onClick={() => setIsShown(myArray[0])}>Basic Concepts</button>
      <button className='topic-button' onClick={() => setIsShown(myArray[1])}>SQL Queries</button>
      <button className='topic-button' onClick={() => setIsShown(myArray[2])}>Relational Model</button>
      {/* 👇️ show elements on click */}
      {isShown===myArray[0] && (
        <div>
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
        </div>
      )}
      
      {isShown===myArray[1] && (
        <div>
          <h2>Some content here1</h2>
        </div>
      )}

      {/* 👇️ show component on click
      {isShown && <Box />} */}
    </div>
  );
}

function Box() {
  return (
    <div>
      <h2>Box</h2>
    </div>
  );
}



const ButtonsGroup = () => {
  return (
    <>
    
    <p className='topic'>
      <h2>TOPIC</h2>
      <App/>
    <div>
      <button className='topic-button'>Basic Concepts</button>
      <button className='topic-button'>SQL Queries</button>
      <button className='topic-button'>Relational Model</button>
      <button className='topic-button'>NoSQL</button>
      
      
    </div>
    <div>&nbsp;</div> 

    <div>
    <button className='topic-button'>File Organizations</button>
      <button className='topic-button'>SQL and NoSQL</button>
      <button className='topic-button'>Indexing, B and B+ trees</button>
      <button className='topic-button'>Transactions & Concurrency Control</button>
    </div>
    </p>
    
      
    </>
  );
};

class CoursesCard extends Component {
  render() {
    return (
      <>
      <ButtonsGroup/>
      <h2>COURSE CATALOG</h2>
      {/* <section className='coursesCard'>
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
      </section> */}
    </>
    )
    
  }
}
export default CoursesCard

