import ReactTypingEffect from 'react-typing-effect';
import '../styles/general/Landing.css'

 interface LandingProps {
  current_mode: string;
}


const Landing = ({ current_mode }: LandingProps) => {

    let arrow = './src/assets/images/';
    arrow += current_mode === 'light' ? 'arrow-dark.svg' : 
                                        'arrow-light.svg';
    return (
        <>
            <h1 id = 'landing-jump'> Hey, I'm Teja! </h1>
            <ReactTypingEffect 
            className = "typewriter"
            text={["Student", "Developer", "Designer", "Creator"]}
            speed={100}          
            eraseSpeed={100}        
            eraseDelay={1000} 
            />

            <img className = 'scroll-arrow' src = {arrow} alt = "scrolldown" onClick = {() => {
                const to_scroll_to = document.getElementById('about');
                if(to_scroll_to) {
                    to_scroll_to.scrollIntoView({behavior: 'smooth'});
                }
            }
            }/>
        </>
    );
    };

export default Landing;