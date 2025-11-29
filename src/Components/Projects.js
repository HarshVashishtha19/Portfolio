import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/StudyNotionImage.png';
import CauseConnectImage from '../images/CauseConnectImage.png';
import StudyNotionImage from '../images/StudyNotionImage.png';
import WigglesImage from '../images/WigglesImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={CauseConnectImage} projectName="CauseConnect" />
        <ProjectBox projectPhoto={StudyNotionImage} projectName="StudyNotion" />
        <ProjectBox projectPhoto={WigglesImage} projectName="Wiggles" />
      </div>

    </div>
  )
}

export default Projects