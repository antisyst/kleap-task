import './section3.scss';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Slide } from 'react-awesome-reveal';


export default function Section3() {
    return(
        <div className="section-3">
             <Slide delay={230} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
           <h1 className='first-content'>Improve your business whenever you want, wherever you want</h1>
           </Slide>
           <Slide delay={270} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
           <p>5 minutes to wait, a bus ride? Take the opportunity to improve your content, create new content or just watch the evolution of your sales.
            The future is mobile website.</p>
           </Slide>
           <Slide delay={280} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
            <a href="#">Get started for free  <MdKeyboardArrowRight/></a>
           </Slide>
        </div>
    )
}