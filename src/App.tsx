import './styles/general/general.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
/* TODO
  1. Update the about, projects, and contact sections
  2. Add background animation for each section
*/

import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useState, useEffect } from 'react'

function App() {

// Initialize state with the current theme
  const [theme, setTheme] = useState(
    document.getElementsByTagName('html')[0].getAttribute('data-theme')
  );

// Update the theme attribute of the html tag when theme changes
  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute('data-theme', theme!);
  }, [theme]);


  return (
    <>
      <Navbar current_mode={theme!} setTheme={setTheme} />
      <div id = "landing-page">
        <Landing  current_mode={theme!} />
      </div>
      <div id = "about-page">
        <About />
      </div>
      <div id = "projects-page">
        <Projects />
      </div>
      <div id = "contact-page">
        <Contact />
      </div>
    </>
  )
}

export default App
