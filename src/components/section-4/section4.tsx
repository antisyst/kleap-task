import './section4.scss';
import { SiFacebook } from 'react-icons/si'


export default function Section4() {
    return(
        <div className="section-4">
           <h1 className='first-content'>Join our experts community</h1>
           <p>Meet and learn from creators & companies who share how they use AI to create better content at lightning speed.</p>
            <a href="https://www.facebook.com/groups/698488070789340" target='_blank'><SiFacebook/> Join </a>
        </div>
    )
}