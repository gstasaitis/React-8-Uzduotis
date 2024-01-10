const NavBar = () => {
  return (
    <div className="navBar">
    <div className="header">
      <div className="landing">
        <h3>LandingPage</h3>
      </div>

      <nav>
        <a href="http://" target="_blank" rel="noopener noreferrer">Home</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">About</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">Contacts</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">Faq</a>
      </nav>

      <div className="started">
        <button className="getStarted">Get Started</button>
      </div>
    </div>
  </div>
  )
}

export default NavBar