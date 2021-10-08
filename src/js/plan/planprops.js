import React from "react";
class Planprops extends React.Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="item first-item">
              <h4>{this.props.plan}</h4>
              <em>{this.props.des}</em>
              <span>{this.props.price}</span>
              <ul>
                <li>{this.props.projects}</li>
                <li>{this.props.space}</li>
                <li>{this.props.checkups}</li>
                <li>{this.props.support}</li>
              </ul>
              <div class="main-blue-button-hover">
                <a href="#s">{this.props.button}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Planprops;
