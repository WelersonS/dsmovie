import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
      <nav className="container">
        <div className="ds-movie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/WelersonS">
            <div className="dsmovie-contact-container">
              <GithubIcon/>
              <p className="dsmovie-contact-link">/WelersonS</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
    );
}

export default Navbar;