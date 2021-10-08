import React from "react";

import aboutleftimage from "../../assets/images/about-left-image.png";
import Seoprops from "./seoprops";
import Seomap from "./seomap";
import "./seo.css";

// animation
import Bounce from "react-reveal/Bounce";
import Flip from 'react-reveal/Flip';

class Seo extends React.Component {
  render() {
    return (
      <div>
        <div id="about" class="about-us section">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 align-self-center">
                <div class="left-image">
                  <Bounce left>
                    <img
                      src={aboutleftimage}
                      alt="Two Girls working together"
                    />
                  </Bounce>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="section-heading">
                  <h2>
                    Grow your website with our <em>SEO Tools</em> &amp;{" "}
                    <span>Project</span> Management
                  </h2>
                  <div className="seo">
                  <Flip left>
                    {Seomap.map((val) => {
                      return (
                        <Seoprops
                          icon={val.icon}
                          digit={val.digit}
                          title={val.title}
                          subtitle={val.subtitle}
                        />
                      );
                    })}
                    </Flip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Seo;
