import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
     <h3> Get courses from ₹449 for a limited time| A special offer for new students
Ends in 5h 59m 32s. </h3> 
      <span className="mailDesc">Sign up and we'll send the best Courses to you</span>
      <span className="mailDesc">A broad selection of courses!
Choose from 1850 online video courses with new additions published every month </span>
      <div className="mailInputContainer"> 
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList