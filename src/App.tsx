import './styles/general.css'

/*
  Function to change the theme. We need to edit general styles, such as the
  text and background colors, some accent colors, styles for individual 
  components, and the favicon. We can do most of this by just changing the
  'data-theme' attribute of the <hrml> tag.

  To change the favicon, all we do is change the 'href' attribute of the
  <link> tag with id 'favicon'.
*/

function change_theme() {
  const html = document.getElementsByTagName('html')[0]
  const theme = html.getAttribute('data-theme')
  const favicon = document.querySelector('link[rel="icon"]')

  if (theme === 'light') {
    html.setAttribute('data-theme', 'dark')
    favicon?.setAttribute('href', './src/assets/images/monogram-dark-theme.svg')
  } else {
    html.setAttribute('data-theme', 'light')
    favicon?.setAttribute('href','./src/assets/images/monogram-light-theme.svg')
  }
}

function App() {
  return (
    <>
      <h1>Hey, I'm Teja.</h1>
      <p>HERMES: My personal website, but clean & minimalistic this time.</p>
      <hr />
      <br />
      <button onClick={change_theme}>Change Theme</button>
    </>
  )
}

export default App
