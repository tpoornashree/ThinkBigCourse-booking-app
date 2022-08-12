import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
      <button className="navButton">Join as a new learner!</button>
      <button className="navButton">Login with existing account</button>
        <div className="navItems">
          <span className="logo">ThinkBig Studybooking</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar