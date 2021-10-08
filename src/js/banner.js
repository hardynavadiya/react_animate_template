import React from "react";
import Fade from "react-reveal/Fade";
class Banner extends React.Component {
  render() {
    return (
      <div>
        <div class="main-banner" id="top">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="row">
                  <div class="col-lg-6 align-self-center">
                    <div class="owl-carousel owl-banner">
                      <div class="item header-text">
                        <Fade left>
                          <h2>
                            Welcome to our
                            <span>Website</span>
                          </h2>
                          <h4 style={{ color: "#ff695f" }}>
                            This is a template of React js
                          </h4>
                        </Fade>
                      </div>
                    </div>
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

export default Banner;
