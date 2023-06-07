import './section2.scss';
import { ImFire } from 'react-icons/im';
import { FaLaughBeam, FaCrown } from 'react-icons/fa'
import { BsCalendarCheck } from 'react-icons/bs';
import { Slide } from 'react-awesome-reveal';

export default function Section2() {
    return(
        <div className="section-2">
            <div className="container_2">
             <Slide delay={230} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <div className="item_cont">
                    <div>
                        <ImFire/>
                        <h1>Proven Effectiveness</h1>
                    </div>
                    <p>
                    Take advantage of our intuitive interface, community, and online support to successfully launch your online business.
                    </p>
                </div>
                </Slide>
              <Slide delay={230} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <div className="item_cont">
                    <div>
                        <BsCalendarCheck/>
                        <h1>Guaranteed Motivation</h1>
                    </div>
                    <p>
                    We help you get into the habit of improving your site and content with our fun features, video tutorial, tips and reminders from our smiley mascot, Klea.
                    </p>
                </div>
                </Slide>
              <Slide delay={230} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <div className="item_cont">
                    <div>
                        <FaCrown/>
                        <h1>Personalized AI</h1>
                    </div>
                    <p>
                    The platform gives you all the tools you need to learn at your own pace thanks to video tutorials and personalized advice that adapts according to your progress.
                    </p>
                </div>
                </Slide>
              <Slide delay={230} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <div className="item_cont">
                    <div>
                        <FaLaughBeam/>
                        <h1>Proven Effectiveness</h1>
                    </div>
                    <p>
                    Working on your site doesn't have to be a chore! With the intuitive interface, edit your content, add new products and manage your business from your mobile phone without stress.
                    </p>
                </div>
                </Slide>
            </div>
        </div>
    )
}