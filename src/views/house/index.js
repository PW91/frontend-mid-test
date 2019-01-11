import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import propTypes from "prop-types";

import { houseActions } from "../../modules/house";
import Loading from "../../components/Loading";

class House extends Component {
  componentDidMount() {
    const { houses } = this.props;
    const { id } = this.props.match.params;

    if (houses.length) {
      this.props.houseActions.filterHouseById(id);
    } else {
      this.props.houseActions.fetchHouseById(id);
    }
  }

  componentWillUnmount() {
    this.props.houseActions.clearDetails();
  }

  render() {
    const { details } = this.props;

    if (details) {
      return (
        <div className="main-container">
          <h4>Address: {details.address}</h4>
          <h4>Owner: {details.owner}</h4>
          <h4>Price: {details.price}</h4>
          <h4>Area: {details.area}</h4>
        </div>
      );
    } else {
      return (
        <div className="main-container">
          <Loading />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    loading: state.house.loading,
    details: state.house.details,
    houses: state.house.houses
  };
};

const mapDispatchToProps = dispatch => ({
  houseActions: bindActionCreators(houseActions, dispatch)
});

//List.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(House);
