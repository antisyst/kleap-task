import './showcase.scss';
import ShowcaseIcon from '../../assets/showcase-img';
import { Fade } from "react-awesome-reveal";
export default function Showcase() {
    return(
      <Fade delay={4500} triggerOnce={true} direction={"left"} cascade damping={1e-2}>
        <div className='showcase'>
          <div>
          <h1>Get a website, update, sell online, and get 10x more results <span>with AI</span>.</h1>
            <p>Get an entire mobile website with images, copy, and product ready to sell <span>in the next 30 seconds</span>.</p>
            <div className="buttons">
                <a href="">Get started for free</a>
                <a href="">I have an account</a>
            </div>
          </div>
          <div>
            <ShowcaseIcon/>
          </div>
        </div>
        </Fade>
    )
}