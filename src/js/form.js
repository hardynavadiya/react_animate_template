import React from "react";

// Animation
import Fade from "react-reveal/Fade";
class Form extends React.Component {
  render() {
    return (
      <div>
        <div id="contact" class="contact-us section">
          <div class="container">
            <div class="row">
              <div class="col-lg-7">
                <div class="section-heading">
                  <h2>
                    Feel free to <em>Contact</em> us via the <span>Google</span>
                  </h2>
                  <div id="map">
                    <Fade left>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.70717144155!2d72.43965271045838!3d23.02049777433067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1632733115738!5m2!1sen!2sin"
                        width="100%"
                        height="360px"
                        frameborder="0"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        title="abc"
                      ></iframe>
                    </Fade>
                  </div>

                  <div class="info">
                    <span>
                      <i class="fa fa-phone"></i>{" "}
                      <a href="#d">
                        010-020-0340
                        <br />
                        090-080-0760
                      </a>
                    </span>
                    <span>
                      <i class="fa fa-envelope"></i>{" "}
                      <a href="#d">
                        Adtech@gmail.com
                        <br />
                        Ncit@gmail.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-lg-5 align-self-center">
                <form id="contact" action="" method="get">
                  <div class="row">
                    <div class="col-lg-12">
                      <fieldset>
                        <input
                          type="name"
                          name="name"
                          id="name"
                          placeholder="Name"
                          autocomplete="on"
                          required
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <input
                          type="surname"
                          name="surname"
                          id="surname"
                          placeholder="Surname"
                          autocomplete="on"
                          required
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="Your Email"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <input
                          type="text"
                          name="website"
                          id="website"
                          placeholder="Your Website URL"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          class="main-button"
                        >
                          Submit Request
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="contact-dec">
            <img src="assets/images/contact-dec.png" alt="" />
          </div>
          <div class="contact-left-dec">
            <img src="assets/images/contact-left-dec.png" alt="" />
          </div>
        </div>

        <div class="footer-dec">
          <img src="assets/images/footer-dec.png" alt="" />
        </div>

        <footer>
          <div class="container">
            <div class="row">
              <div class="col-lg-3">
                <div class="about footer-item">
                  <div class="logo">
                    <a href="#a">
                      <img
                        src="assets/images/logo.png"
                        alt="Onix Digital TemplateMo"
                      />
                    </a>
                  </div>
                  <a href="#a">Adtech@gmail.com</a>
                  <ul>
                    <li>
                      <a href="#a">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#a">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#a">
                        <i class="fa fa-behance"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#a">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="services footer-item">
                  <ul>
                    <li>
                      <a href="#a">SEO Development</a>
                    </li>
                    <li>
                      <a href="#a">Business Growth</a>
                    </li>
                    <li>
                      <a href="#a">Social Media Managment</a>
                    </li>
                    <li>
                      <a href="#a">Website Optimization</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="community footer-item">
                  <h4>Community</h4>
                  <ul>
                    <li>
                      <a href="#a">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="#a">Business Ideas</a>
                    </li>
                    <li>
                      <a href="#a">Website Checkup</a>
                    </li>
                    <li>
                      <a href="#a">Page Speed Test</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="subscribe-newsletters footer-item">
                  <h4>Subscribe Newsletters</h4>
                  <p>Get our latest news and ideas to your inbox</p>
                  <form action="#" method="get">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      placeholder="Your Email"
                      required=""
                    />
                    <button type="submit" id="form-submit" class="main-button ">
                      <i class="fa fa-paper-plane-o"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="copyright">
                  <p>
                    Copyright © 2021
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Form;
