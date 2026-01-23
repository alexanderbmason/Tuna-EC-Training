import './Header.css'
import snorkelHeader from '../../images/snorkel_header.svg'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={snorkelHeader} alt="Snorkel" className="header-logo" />
        <div className="header-text">
          <h1 className="header-title">Project Tuna Training Hub</h1>
        </div>
      </div>
    </header>
  )
}

export default Header
