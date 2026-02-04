import React from 'react'; 
import {FaReact, FaPython, FaGitAlt, FaGithub,  FaBootstrap ,FaJava} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiVercel ,SiTailwindcss} from "react-icons/si";


const Skills = ({skill}) => {
    const icon = {
        Java: <FaJava/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Python : <FaPython/>,
        Tailwind : <SiTailwindcss />,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
