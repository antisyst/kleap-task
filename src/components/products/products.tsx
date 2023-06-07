import './product.scss';
import { Fade } from 'react-awesome-reveal';

export default function Product() {
    return(
        <div className='kleap-section'>
           <Fade delay={300} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
            <h1 className='first_content'>What amazing business are you going to start with <span>Kleap</span>?</h1>
            </Fade>
           <Fade delay={300} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
            <p className='first_p'>Discover all the ways the Kleap mobile website builder can help you launch your online business.</p>
            </Fade>
           <Fade delay={350} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
            <div className="kleap_item">
                <div>
                    <h1>Let the <span>AI</span> build pages and products for you</h1>
                    <p>
                    Are you ready to take your website building game to the next level? With the AI, let the machine do the heavy lifting for you.

                    Say goodbye to tedious manual page building and hello to a smarter way of working. Imagine what you could create with an AI-powered partner by your side!

                    Create sales pages and forms that will help you generate leads in a record time.

                    No matter what kind of page you want to create, Kleap has got you covered.
                    </p>
                </div>
                <div>
                    <img src="https://kleap.co/wp-content/uploads/2023/02/Group-2448.png" alt="" />
                </div>
            </div>
            </Fade>
           <Fade delay={300} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
            <div className="kleap_item">
                  <div>
                    <img src="https://kleap.co/wp-content/uploads/2023/02/Group-2446.png" alt="" />
                </div>
                <div>
                    <h1>Build pages to explain what you do that you can be proud of</h1>
                    <p>
                    It has never been so easy to have a page that look exactly the way you want it to, so it accurately reflects who you are and what your product is. 

                    You can write blog posts, share your portfolio, advertise services – all super fast and optimised for viewing on mobile devices! 

                    So why not make start creating pages that reflects the best version of you?
                    </p>
                </div>
            </div>
            </Fade>
           <Fade delay={300} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
            <div className="kleap_item">
                <div>
                    <h1>Sell your products and subscriptions online with a click</h1>
                    <p>
                    Sell your products and subscriptions online to anyone, anywhere in the world. With our integrated payment process, you can be confident that transactions are both reliable and secure.

                    Get the flexibility to offer your customers the option to pay over time, whether it’s monthly, quarterly, biannually, yearly, or any other payment plan you choose. 

                    Don’t limit your creativity – whether you want to sell a digital download, eBook, physical product, course, or monthly membership, Kleap has you covered. 

                    With Kleap, you can take your business to the next level and reach customers all over the world.
                    </p>
                </div>
                <div>
                    <img src="https://kleap.co/wp-content/uploads/2023/02/Group-2447.png" alt="" />
                </div>
            </div>
            </Fade>
           <Fade delay={300} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
            <div className="kleap_item">
                <div>
                    <img src="https://kleap.co/wp-content/uploads/2023/02/Group-2442.png" alt="" />
                </div>
                <div>
                    <h1>Now you can make money from your traffic Tiktok, Insta, Twitter and organic</h1>
                    <p>
                    Turn your traffic into email or sms subscribers you own and then turn them into customers.

                    Get valuable insights into your sales with analytics that can help you make informed decisions about your products and messaging.

                    Grow your audience even further by posting new contents and sending email or SMS broadcasts.

                    Keep track of orders and registrations, and get real-time information about your business all in one place. 
                    </p>
                </div>
            </div>
            </Fade>
           <Fade delay={300} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
            <div className="kleap_item">
                <div>
                    <h1>Now you can make money from your traffic Tiktok, Insta, Twitter and organic</h1>
                    <p>
                    Turn your traffic into email or sms subscribers you own and then turn them into customers.

                    Get valuable insights into your sales with analytics that can help you make informed decisions about your products and messaging.

                    Grow your audience even further by posting new contents and sending email or SMS broadcasts.

                    Keep track of orders and registrations, and get real-time information about your business all in one place. 
                    </p>
                </div>
                <div>
                    <img src="https://kleap.co/wp-content/uploads/2023/02/Group-2442.png" alt="" />
                </div>
            </div>
            </Fade>
        </div>
    )
}