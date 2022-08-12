import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem"> <h3>Part Time Courses Offered</h3></li>
          <li className="fListItem">Machine Learning</li>
          <li className="fListItem">Digital Marketing</li>
          <li className="fListItem">Cyber Security</li>
          <li className="fListItem">Sales and business development</li>
          <li className="fListItem">UI/UX design</li>
          <li className="fListItem">TB Classroom Recordings</li>
        </ul>
        <ul className="fList">
        <li className="fListItem"> <h3>Executive Education</h3></li>
          <li className="fListItem">HR and Talent Management </li>
          <li className="fListItem">Blockchain </li>
          <li className="fListItem">Leadership and Interpersonal skills </li>
          <li className="fListItem">Business Management and strategy</li>
          <li className="fListItem">Data Mining</li>
          <li className="fListItem">Quantum Computing</li>
        </ul>
        <ul className="fList">
        <li className="fListItem"> <h3>Engineering</h3></li>
          <li className="fListItem">Aerospace Engineering </li>
          <li className="fListItem">Biomedical Engineering</li>
          <li className="fListItem">Chemical Engineering</li>
          <li className="fListItem">Civil Engineering</li>
          <li className="fListItem">Electrical Engineering</li>
        </ul>
        <ul className="fList">
        <li className="fListItem"> <h3>Others</h3></li>
          <li className="fListItem">Azure </li>
          <li className="fListItem">DevOps</li>
          <li className="fListItem">Django </li>
          <li className="fListItem">Python </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Customer Service</li>
          <li className="fListItem">Partner Help</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Press center</li>
          <li className="fListItem">Safety Resource Center</li>
          <li className="fListItem">Investor relations</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 ThinkBig StudyBooking. Done by <a href="https://github.com/tpoornashree">Poornashree</a></div>
    </div>
  );
};

export default Footer;
