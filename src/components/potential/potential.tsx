import './potential.scss';
import { BsPeopleFill, BsPerson, BsGem } from 'react-icons/bs';
import { MdOutlineSecurity, MdOutlineRocketLaunch } from 'react-icons/md';
import { FaLaughBeam, FaHandshake } from 'react-icons/fa';
import { IoTrendingUpSharp } from 'react-icons/io5';
import { Fade } from 'react-awesome-reveal';

export default function Potential() {
    return(
        <div className='potensial'>
           <Fade delay={360} triggerOnce={true} direction={"left"} cascade damping={1e-1}>
            <h1 className='first-content'>How will <span>Kleap</span> unlock yourbusiness potential?</h1>
            </Fade>
            <div className="container">
           <Fade delay={450} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <div className='item'>
                    <div>
                        <BsPeopleFill/>
                    </div>
                    <div className='content'>
                        <h2>Collaborate with your team</h2>
                        <p>Invite team members from all around the world to work on content and see updates in real-time.</p>
                    </div>
                </div>
            </Fade>
           <Fade delay={450} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <div className='item'>
                    <div>
                        <MdOutlineSecurity/>
                    </div>
                    <div className='content'>
                        <h2>Secure and super fast</h2>
                        <p>Fast and secure. Our cutting-edge technology and global network guarantee top performance.</p>
                    </div>
                </div>
            </Fade>
           <Fade delay={500} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <div className='item'>
                    <div>
                        <MdOutlineRocketLaunch/>
                    </div>
                    <div className='content'>
                        <h2>Booster for SEO</h2>
                        <p>Boost Your SEO with the Latest Trends. Our mobile-first approach delivers high impact on your website’s ranking.</p>
                    </div>
                </div>
            </Fade>
           <Fade delay={500} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <div className='item'>
                    <div>
                        <FaLaughBeam/>
                    </div>
                    <div className='content'>
                        <h2>Have fun! Kleap is a joy.</h2>
                        <p>AI is an exciting, new technology that can unlock your imagination to create some amazing things.</p>
                    </div>
                </div>
            </Fade>
           <Fade delay={550} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <div className='item'>
                    <div>
                        <FaHandshake/>
                    </div>
                    <div className='content'>
                        <h2>Highly customizable and integrable</h2>
                        <p>Kleap offers integration with other tools. Enjoy HTML integration, data export, and integration with email marketing and CRM tools.</p>
                    </div>
                </div>
            </Fade>
           <Fade delay={550} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <div className='item'>
                    <div>
                        <BsPerson/>
                    </div>
                    <div className='content'>
                        <h2>Personal domain and data ownership</h2>
                        <p>Connect your custom domain or get a new one and take Control of Your Online Presence with data ownership.</p>
                    </div>
                </div>
            </Fade>
           <Fade delay={600} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <div className='item'>
                    <div>
                        <IoTrendingUpSharp/>
                    </div>
                    <div className='content'>
                        <h2>10X your content output</h2>
                        <p>Whether you’re a creator, small business owner or marketing director, Kleap helps you scale up.</p>
                    </div>
                </div>
            </Fade>
           <Fade delay={600} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <div className='item'>
                    <div>
                        <BsGem/>
                    </div>
                    <div className='content'>
                        <h2>Brainstorm new ideas.</h2>
                        <p>Unlock Your Creativity with Kleap. Say goodbye to writer’s block and welcome new ideas.</p>
                    </div>
                </div>
            </Fade>
            </div>
        </div>
    )
}