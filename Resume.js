import React, { Fragment } from 'react'
import { SiCodechef, SiHackerrank } from 'react-icons/si';

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">VIPRANSHU TOMAR</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">EXPERIENCE</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">WEB DEVELOPER</h4>
                                <h6 className="blue-label px-2 py-1">jan2023 - feb 2024</h6>
                                <p className="m-0">BYARV IT NETWORKS · Full-time</p>
                                <p>NOIDA UP, India</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Frontend developer Trainee</h4>
                                <h6 className="blue-label px-2 py-1">Oct 2021 - Apr 2022</h6>
                                <p className="m-0">ENSINO PVT LTD · Internship</p>
                                <p>DEHRADUN UTTRAKHAND, India</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">BE - Computer Engineering</h4>
                                <h6 className="blue-label px-2 py-1">2017 - 2021</h6>
                                <p className="m-0">Uttrakhand technical University Dehradun</p>
                                <p>CGPA: 7.25</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Higher Secondary School</h4>
                                <h6 className="blue-label px-2 py-1">2014</h6>
                                <p className="m-0">S.K Public  School</p>
                                <p>Grade: 78 %</p>
                            </li>
                        </ul>

                    </div>
                </div>

                <hr></hr>
                
               DEVELOPED BY VIPRANSHU TOMAR
            </div>
        </div>
    </Fragment>
  )
}

export default Resume