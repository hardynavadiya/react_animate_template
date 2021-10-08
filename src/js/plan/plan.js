import React from "react";
import Planprops from "./planprops";
import Planmap from './planmap';
import './plan.css';

// animation 
import Rotate from 'react-reveal/Rotate';

class Plan extends React.Component {
  render() {
    return (
      <div>
        <div id="pricing" class="pricing-tables">
          <div class="tables-left-dec">
            <img src="assets/images/tables-left-dec.png" alt="" />
          </div>
          <div class="tables-right-dec">
            <img src="assets/images/tables-right-dec.png" alt="" />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-6 offset-lg-3">
                <div class="section-heading">
                  <h2>
                    Select a suitable <em>plan</em> for your next{" "}
                    <span>projects</span>
                  </h2>
                  <span>Our Plans</span>
                </div>
              </div>
            </div>
            <Rotate top left>
            <div className="plan">
                {
                    Planmap.map((val) => {
                        return(
                            <Planprops plan={val.plan} des={val.des} price={val.price} projects={val.projects} space={val.space} checkups={val.checkups} support={val.support} button={val.button}/>
                        )
                    })
                }
               
            </div>
            </Rotate>
          </div>
        </div>
      </div>
    );
  }
}

export default Plan;
