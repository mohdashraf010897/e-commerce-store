import React, { Component } from "react";
import Layout from "../components/common/Layout/index";
import Catalogue from "../components/Catalogue/index";
import { connect } from "react-redux";

class ProductLanding extends Component {
  render() {
    return (
      <Layout>
        {" "}
        <Catalogue {...this.props} />{" "}
      </Layout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    shopInventory: state.shop.shopInventory,
  };
};

export default connect(mapStateToProps)(ProductLanding);
