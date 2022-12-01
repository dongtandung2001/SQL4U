import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';
import './footerCSS.css';
import  {BsEnvelopeFill} from 'react-icons/bs'

function footer() {
    return (
        <MDBFooter id="footer" className='text-center text-lg-left footer-div' style={{lineHeight: "1.3"}}>
            <MDBContainer className='p-4'>
                <MDBRow>
                    <MDBCol lg='4' md='12' className='mb-4 mb-md-0' style={{textAlign: "left"}}>
                        <h5 className='text-uppercase' style={{borderBottom: "1px solid #fff", paddingBottom: "0.3rem"}}>ABOUT</h5>

                        <p>
                            SQL4U is created by a team of six Computer Science students of San Jose State University with a purpose of
                            bringing Database Management System knowledge to everyone from Beginners to Professionals to enhance their skills
                            in this Big Data World.
                        </p>
                    </MDBCol>

                    <MDBCol lg='4' md='12' className='mb-4 mb-md-0' style={{textAlign: "left"}}>
                        <h5 className='text-uppercase' style={{borderBottom: "1px solid #fff", paddingBottom: "0.3rem"}}>CONTACT</h5>

                        <a href='mailto: truongphu2842@gmail.com'>
                            <BsEnvelopeFill className='me-1'/>Truong Phu Vu: truongphu2842@gmail.com
                        </a>
                        <a href='mailto: dongtandung2001@gmail.com'>
                            <BsEnvelopeFill className='me-1'/>Dung Dong: dongtandung2001@gmail.com
                        </a>
                        <a href='mailto: thithuyvy.dinh@sjsu.edu'>
                            <BsEnvelopeFill className='me-1'/>Vy Dinh: thithuyvy.dinh@sjsu.edu
                        </a>
                    </MDBCol>
                    <MDBCol lg='4' md='12' className='mb-4 mb-md-0' style={{textAlign: "left"}}>
                        <h5 className='text-uppercase' style={{borderBottom: "1px solid #fff", paddingBottom: "0.3rem"}}>CONTACT</h5>

                        <a href='mailto: shinhyung.lee@sjsu.edu'>
                            <BsEnvelopeFill className='me-1'/>Shin Hyung Lee: shinhyung.lee@sjsu.edu
                        </a>
                        <a href='mailto: khang.huynh01@sjsu.edu'>
                            <BsEnvelopeFill className='me-1'/>Khang Huynh: khang.huynh01@sjsu.edu
                        </a>
                        <a href='mailto: joseph.chang@sjsu.edu'>
                            <BsEnvelopeFill className='me-1'/>Joseph Chang: joseph.chang@sjsu.edu
                        </a>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div className='text-center p-3 copy-right-div'>
                &copy; {new Date().getFullYear()} Copyright:{' '}
            </div>
        </MDBFooter>
    )
}

export default footer