// Navbar
// Import syles
 import '../styles/general/Navbar.css'

 // Method to toggle theme between light and dark modes.
 // Accomplished using the setTheme method from useContext.

const toggleTheme = (setTheme : (theme: string) => void) => {
  let theme = document.getElementsByTagName(
                      'html')[0].getAttribute('data-theme');
  theme = theme === 'light' ? 'dark' : 'light';
  document.getElementsByTagName('html')[0].setAttribute('data-theme', theme);
  setTheme(theme);
}


// Define arguments for Navbar component.
 interface NavbarProps {
  current_mode: string;
  setTheme: (theme: string) => void;
}

const Navbar = ({ current_mode, setTheme }: NavbarProps) => {

  let monogram = './src/assets/images/';
  monogram += current_mode === 'light'  ? 'monogram-light-theme.svg' :    
                                          'monogram-dark-theme.svg';

  let theme_toggle = './src/assets/images/';
  theme_toggle += current_mode === 'light' ? 'moon.svg' : 'sun.svg';

  return (
    <nav className="navbar">

      <div className="navbar-content">
        <div className="navbar-logo">
          <img src={monogram} alt="logo" />
        </div>

        <div className = 'navbar-links'>
          <a href = '#landing-jump'>Home</a>
          <a href = '#'>About</a>
          <a href = '#'>Projects</a>
          <a href = '#'>Contact</a>
          <img id = 'mode-toggle' src = {theme_toggle} onClick = {() => toggleTheme(setTheme)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;