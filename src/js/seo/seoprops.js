import React from "react";
class Seoprops extends React.Component {
    render() { 
        return <div>
            <div class="row">
                    <div class="col-lg-4">
                      <div class="fact-item">
                        <div class="count-area-content">
                          <div class="icon">
                            <img
                              src={this.props.icon}
                              alt="somethims"
                            />
                          </div>
                          <div class="count-digit">{this.props.digit}</div>
                          <div class="count-title">{this.props.title}</div>
                          <p>{this.props.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
        </div>;
    }
}
 
export default Seoprops;