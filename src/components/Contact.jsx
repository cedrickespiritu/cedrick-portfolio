import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div className="h-full lg:h-max px-10 bg-cover bg-center bg-no-repeat bg-primary font-manrope py-[4.5rem]">
      <div className="flex flex-col justify-center items-center min-h-[85vh] max-w-[1000px] mx-auto px-2 md:px-8 text-white gap-10">
        <span className="page-title-span">Contact</span>
        <div className="contacts-container flex-wrap justify-center">
            <span className="gradpic-container"><img src="/assets/img/gradpic.png" alt="" /> </span>
            <span className="workwithme-span">Work <br />with me</span>
            <span className="contact-details-span">
                <span className="contact-info-span">
                    <span className="contact-icon"><img src="/assets/img/contact-icon/address-icon.png" alt="" /></span>
                    <span className="myaddress">
                        <ul>
                            <li>Sampaguita West Lipa City Batangas</li>
                            <li>Pinagbuhatan Pasig City, Manila</li>
                        </ul>
                    </span>
                </span>
                <span className="contact-info-span">
                    <span className="contact-details-span"><img src="/assets/img/contact-icon/mail-icon.png" alt="" /></span>
                    <span className="myaddress">
                        <ul>
                            <li>cedrickespiritu070@gmail.com</li>
                        </ul>
                    </span>
                </span>
                <span className="contact-info-span">
                    <span className="contact-icon"><img src="/assets/img/contact-icon/number-icon.png" alt="" /></span>
                    <span className="myaddress">
                        <ul>
                            <li>0985 382 3940 (TNT)</li>
                            <li>0953 652 8266 (TM)</li>
                        </ul>
                    </span>
                </span>
            </span>
        </div>
        
      </div>
    </div>
  )
}

export default Contact
