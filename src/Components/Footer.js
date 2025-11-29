import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Harsh Kumar Sharma</h4>
      <h4>Copyright &copy; 2025 HS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/HarshVashishtha19" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/harsh-kumar-sharma-8a32782ba/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo: vashishthaharsh19@gmail.com' target='_blank'><GrMail/></a>
       
      </div>
    </footer>
  )
}

export default Footer