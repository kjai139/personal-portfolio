import phoneIcon from "./Assets/images/icons/phone.svg"
import emailIcon from "./Assets/images/icons/email-outline.svg"

import contactImage from "./Assets/images/contact-image.webp"




const ContactMe = () => {
    return (
        <div className="contact-me">
            <div className="contact-me-left">
                <h2 className="contact-me-head">Contact me</h2>
                <p className="contact-content">Please get in touch if you think our work could be mutually beneficial!</p>
                <p className="contact-address">
                    1234 Random Road
                    Random Town, California 12345
                </p>
                <div className="contact-phone">
                    <img src={phoneIcon} alt="phone icon" className="contact-icons"></img>
                    <p className="contact-content">555-555-5555</p>
                </div>
                <div className="contact-email">
                    <img src={emailIcon} alt="email icon" className="contact-icons"></img>
                    <p className="contact-content">123@home.ca</p>

                </div>
                <div className="icon-links">
                    <a className="link-icon" href="https://github.com/kjai139">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="github link"></img>
                    </a>
                </div>

            </div>
            <div className="contact-me-right">
                <img src={contactImage} alt="" className="contact-img"></img>
            </div>
        </div>
    )
}

export { ContactMe }