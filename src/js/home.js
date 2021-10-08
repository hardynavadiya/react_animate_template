import React from 'react';
import Banner from "../js/banner";
import Services from '../js/services/services';
import Seo from '../js/seo/seo'
import Plan from '../js/plan/plan';
import Email from '../js/email';
import Form from '../js/form';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Banner />
        <Services />
        <Seo />
        <Plan />
        <Email />
        <Form />
      </>
    );
  }
}

export default Home;
