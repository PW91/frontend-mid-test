import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
//import propTypes from "prop-types";

import { houseActions } from "../../modules/house";
import SingleHouse from "../../components/SingleHouse";
import Loading from "../../components/Loading";

class List extends Component {
  componentDidMount() {
    const { houses, houseActions } = this.props;

    if (!houses.length) {
      houseActions.fetchAllHouses();
    }
  }

  handleDelete = id => {
    this.props.houseActions.deleteHouseById(id);
  };

  render() {
    const { houses, loading } = this.props;

    return (
      <div className="main-container">
        <Link to="/form" className="btn">
          Stwórz nowy
        </Link>
        {loading ? <Loading /> : <React.Fragment />}
        {houses.map(house => {
          return (
            <SingleHouse
              key={house._id}
              house={house}
              handleDelete={this.handleDelete}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.house.loading,
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
)(List);
