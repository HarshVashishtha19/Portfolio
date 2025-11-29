import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    CauseConnectDesc : "A community-focused web platform that helps people find meaningful social causes and connect directly with NGOs. Users can explore ongoing projects, join activities, and contribute through volunteering or support.",
    CauseConnectGithub : "https://github.com/HarshVashishtha19/Cause-Connect",
    CauseConnectWebsite : "https://cause-connect-b.netlify.app/",

    StudyNotionDesc:"A modern ed-tech platform that allows learners to explore courses, track progress, and engage with interactive content, while empowering instructors to create and manage courses through a secure and intuitive dashboard.",
    StudyNotionGithub:"",
    StudyNotionWebsite:"https://study-notion-e.vercel.app/",
    
    WigglesDesc:"An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.",
    WigglesGithub:"https://github.com/HarshVashishtha19/Wiggles",
    WigglesWebsite:"https://wiggles-vnh9.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox