import './section.scss';
import AssetImage from '../../assets/asset-image.svg';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FiCheck } from 'react-icons/fi';
import { Fade } from 'react-awesome-reveal';

export default function Section() {
    return(
        <div className='section'>
           <div>
           <Fade delay={300} triggerOnce={true} direction={"left"} cascade damping={1e-1}>
            <h1>Now you can have a <span>AI website</span> Builder that design and writes your content for you while you relax</h1>
            </Fade>
           <Fade delay={400} triggerOnce={true} direction={"left"} cascade damping={1e-1}>
                <p>Tell Kleap what your business or product is and watch it turn features into exciting benefits in seconds. It will generate headlines, images, product bullet points, meta descriptions, FAQs, and more.</p>
            </Fade>
           </div>
           <Fade delay={400} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
           <div>
            <img src={AssetImage} alt="" />
           </div>
           </Fade>
           <Fade delay={400} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
           <div className='button'>
            <div className="but-p">
            <p><FiCheck/> Try without sign up</p>
            <p><FiCheck/>  Free version</p>
            </div>
            <a href="#">Get started for free  <MdKeyboardArrowRight/></a>
           </div>
           </Fade>
        </div>
    )
}