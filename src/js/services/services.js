import React from "react";
import Serviceprops from "./servicesprops";
import "./services.css";

// animation
import Flip from "react-reveal/Flip";

// images
import service_icon1 from "../../assets/images/service-icon-01.png";
import service_icon2 from "../../assets/images/service-icon-02.png";

class Services extends React.Component {
  render() {
    return (
      <div>
        <div id="services" class="our-services section">
          {/* <div class="services-right-dec">
            <img src={services_left} alt="" />
          </div> */}
          <div class="container">
            {/* <div class="services-left-dec">
              <img src={services_right} alt="" />
            </div> */}
            <div class="row">
              <div class="col-lg-6 offset-lg-3">
                <div class="section-heading">
                  <h2>
                    We <em>Provide</em> The Best Service With{" "}
                    <span>Our Tools</span>
                  </h2>
                  <span>Our Services</span>
                </div>
              </div>
            </div>
            <div className="services">
              <Flip top>
                <Serviceprops
                  title="Develop The Best Strategy for Business"
                  subtitle="Get to know more about the topic in details"
                  icon={service_icon1}
                />
                <Serviceprops
                  title="Discover &amp; Explore our SEO Tips"
                  subtitle="Feel free to use this template for your business"
                  icon={service_icon2}
                />
                <Serviceprops
                  title="See The Strategy In The Market"
                  subtitle="Get to know more about the topic in details"
                  icon={service_icon2}
                />
              </Flip>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
