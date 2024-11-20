import React from "react";
import Image from "next/image";
// internal
import ContactForm from "../forms/contact-form";
import contact_icon_1 from "@assets/img/contact/contact-icon-1.png";
import contact_icon_2 from "@assets/img/contact/contact-icon-2.png";
import contact_icon_3 from "@assets/img/contact/contact-icon-3.png";

const ContactArea = () => {
  return (
    <>
      <section className="tp-contact-top">
        <div >
          <div className="tp-contact-inner">
            <div className="row">
              <div className="col-xl-9 col-lg-8 col-md-8 col-sm-8">
                <div className="tp-contact-wrapper">
                  <h3 className="tp-contact-title">Sent A Message</h3>

                  <div className="tp-contact-form">
                    {/* form start */}
                    <ContactForm />
                    {/* form end */}
                    <p className="ajax-response"></p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4">
                <div className="tp-contact-info-wrapper">
                  <div className="tp-contact-info-item">
                    <div className="tp-contact-info-icon">
                      <span>
                        <Image src={contact_icon_1} alt="contact-icon 
                          " width={40} height={40} />
                      </span>
                    </div>
                    <div className="tp-contact-info-content">
                      <p data-info="mail">
                        <a href="mailto:info@gmail.com">info@gmail.com</a>
                      </p>
                      <p data-info="phone">
                        <a href="tel:670-413-90-762">+(91)83448 88488</a><br/>
                        <a href="tel:670-413-90-762">+(91)96262 61656</a>
                      </p>
                    </div>
                  </div>
                  <div className="tp-contact-info-item">
                    <div className="tp-contact-info-icon">
                      <span>
                        <Image src={contact_icon_2} alt="contact-icon" width={40} height={40} />
                      </span>
                    </div>
                    <div className="tp-contact-info-content">
                      <p>
                        <a
                          href="https://www.google.com/maps/place/New+York,+NY,+USA/@40.6976637,-74.1197638,11z/data=!3m1!4b1!4m6!3m5!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728!16zL20vMDJfMjg2"
                          target="_blank"
                        >
                          Shop No:1/15/C4, A.Kurumbalayam,
Avinashi to Sevur Main road, Vettuvapalayam Village, Tirupur Dt.
Avinashi Tk - 641655
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="tp-contact-info-item">
                    <div className="tp-contact-info-icon">
                      <span>
                        <Image src={contact_icon_3} alt="contact-icon" width={40} height={40} />
                      </span>
                    </div>
                    <div className="tp-contact-info-content">
                      <div className="tp-contact-social-wrapper">
                        <h4 className="tp-contact-social-title">
                          Find on social media
                        </h4>

                        <div className="tp-contact-social-icon">
                          <a href="https://web.whatsapp.com/">
                            <i className="fa-brands fa-whatsapp"></i>
                          </a>
                          <a href="https://www.instagram.com/">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                          <a href="https://www.facebook.com/">
                            <i className="fa-brands fa-facebook"></i>
                          </a>
                          <a href="tel:866-805-2405">
                            <i className="fa-solid fa-phone"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <style jsx>{`
        .tp-contact-info-content p[data-info="mail"] {
          color: #55585b;
          margin-bottom: 0;
        }

        .tp-contact-info-content p[data-info="phone"] {
          font-weight: 500;
        }

        .tp-contact-info-content p {
          font-size: 18px;
          line-height: 1.44;
          color: var(--tp-common-black);
        }

        .tp-contact-info-content p a:hover {
          color: var(--tp-theme-primary);
        }

        @media (max-width: 750px) {
          .tp-contact-info-content p,
          .tp-contact-social-wrapper h4, 
          .tp-contact-social-icon i{
            font-size: 10px; // Corrected font size for the media query
          }
        }
      `}</style> */}
    </>
  );
};

export default ContactArea;