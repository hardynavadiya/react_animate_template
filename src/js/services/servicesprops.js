import React from "react";
import './services.css';
class Servicesprops extends React.Component {
  render() {
    return (
      <div>
        <div class="row services_border">
          <div class="col-lg-12">
            <div class="owl-carousel owl-services">
              <div class="item">
                <h4>{this.props.title}</h4>
                <div class="icon">
                  <img src={this.props.icon} alt="" />
                </div>
                <p>{this.props.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Servicesprops;
