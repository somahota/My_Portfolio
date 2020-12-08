import React, { useState } from "react";
import Title from "../components/Title";
import WorkSect from "../components/WorkSect";
import jobs from "../constants/jobs";
import edu from "../constants/edu";
import { Nav } from "react-bootstrap";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
 import Avatar from "../components/Avatar";
  
export default function Jobs() {
  const [showJobDetail, displayJobDetails] = useState(false);
  const [jobDetails, setJobDetails] = useState(jobs[0]);
  const [showUniDetail, displayEduDetails] = useState(false);
  const [uniDetails, setEduDetails] = useState(edu[0]);
  const [showResume] = useState(false);

  return (
    <header className="pt-5 mt0" style={{ height: "90vh" }}>
    <p> <strong><center>click on any of the sections below </center></strong></p>
      <section className="container">
        <Title
          title="Resume"
          textAlignment="center"
          marginAlignment="auto"
        />
		 <Nav className="mt-4">
                <Nav.Link
                  href={"https://drive.google.com/file/d/1zLJnARpLwmZTebYDjWs-rWdsNPLWvKcG/view?usp=sharing"}
				  target="_blank"
                  className="badge badgeSkills mt-4"
                  style={{
					  background: "#9DAAF2",
                    color: "#1A2238",
                    textAlign: "center"
                  }}
                >
                  Resume PDF
                </Nav.Link>
              </Nav>
			
        <div className="row mt-5">
          <div className="col-4">
		  <h3 className="resumeSec"> Education </h3> 
		  {edu.map((uni, index) => {
              return (
                <button
                  onClick={() => {
                    displayEduDetails(true);
					displayJobDetails(false);
                    setEduDetails(uni);
                  }}
                  className="job-btn mb-4"
                  key={index}
                >
                  {uni.uniName}
                </button>
              );
            })}
		  <h3 className="resumeSec"> Work Exp </h3> 
            {jobs.map((job, index) => {
              return (
                <button
                  onClick={() => {
					displayEduDetails(false);
                    displayJobDetails(true);
					
                    setJobDetails(job);
                  }}
                  className="job-btn mb-4"
                  key={index}
                >
                  {job.companyName}
                </button>
              );
            })}
			 
          </div>
		
          <div className="col-8">
		  
		  
			{showUniDetail ? (
              <div>
			  <span className="brown_img"> {uniDetails.img} </span>
                <h4 className="jobProf">{uniDetails.uniProfile}</h4>
                <Nav>
                  <Nav.Link
                    href={uniDetails.uniUrl}
                    target="_blank"
                    className="badge badgeSkills mt-2 p-2"
                    style={{
                      color: "#617d98",
                      textAlign: "center"
                    }}
                  >
                    {uniDetails.uniName}
                  </Nav.Link>
                </Nav>
                <p className="mt-2">{uniDetails.duration}</p>
                <div
                  key={uniDetails.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
					color: "#fce58b",
                    columnGap: "2rem",
                    alignItems: "center"
                  }}
                >
                  <FaAngleDoubleRight
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleRight>
                  {uniDetails.jobLine1}
                  <FaAngleDoubleRight
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleRight>
                  <span className="uni_course">{uniDetails.courses} </span> <span className="col-lg"> {uniDetails.subjects}</span>
                </div>
				<p> </p>
              </div>
            ) : null}
			
            {showJobDetail ? (
              <div>
                <h4 className="jobProf">{jobDetails.jobProfile}</h4>
                <Nav>
                  <Nav.Link
                    href={jobDetails.companyUrl}
                    target="_blank"
                    className="badge badgeSkills mt-2 p-2"
                    style={{
                      color: "#617d98",
                      textAlign: "center"
                    }}
                  >
                    {jobDetails.companyName}
                  </Nav.Link>
                </Nav>
                <p className="mt-2">{jobDetails.duration}</p>
                <div
                  key={jobDetails.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
					color: "#fce58b",
                    columnGap: "2rem",
                    alignItems: "center"
                  }}
                >
                  <FaAngleDoubleRight
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleRight>
                  {jobDetails.jobLine1}
                  <FaAngleDoubleRight
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleRight>
                  {jobDetails.technologyStack}
                </div>
				<p> </p>
				 <p className ="skills"> Skills: <span class="badge badge-secondary">Python</span> <span class="badge badge-secondary">Java</span></p>
				 
				 
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </header>
  );
}
