import './footer.scss';
import Logo from '../../assets/logo';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return(
        <div className="footer_main">
            <footer>
                <div className="fot_item icon-item">
                    <Logo/>
                    <div className="socials">
                       <a href="https://www.facebook.com/kleap.co/" target='_blank'>
                       <FaFacebook/>
                       </a>
                       <a href="https://www.linkedin.com/company/kleap-hq" target='_blank'>
                       <FaLinkedin/>
                       </a>
                       <a href="https://twitter.com/Kleap8" target='_blank'>
                       <FaTwitter/>
                       </a>
                    </div>
                </div>
                <div className='fot_item'>
                    <h2>Product</h2>
                    <a href="#">AI website generator</a>
                    <a href="#">QR code generator</a>
                    <a href="#">Pricing</a>
                </div>
                <div className='fot_item'>
                    <h2>Resources</h2>
                    <a href="#">Help Center</a>
                    <a href="#">Updates</a>
                    <a href="#">Roadmap</a>
                </div>
                <div className='fot_item'>
                    <h2>About Kleap</h2>
                    <a href="#">Story</a>
                    <a href="#">Ambassador program</a>
                    <a href="#">Charities program</a>
                </div>
            </footer>
        </div>
    )
}