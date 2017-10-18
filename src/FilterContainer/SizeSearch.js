import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SizeSearch extends Component {
  render() {
    return (
      <span className="SizeSearch">
        <input
          type="number"
          placeholder=""
          className="sizeInput--Width"
          onChange={this.props.filterWidthHandler}
          value={this.props.filterWidth}
        />
        <span className="inputLabel">width</span>
        <input
          type="number"
          placeholder=""
          className="sizeInput--Height"
          onChange={this.props.filterHeightHandler}
          value={this.props.filterHeight}
        />
        <span className="inputLabel">height</span>
      </span>
    );
  }
}

SizeSearch.PropTypes ={
  filterWidthHandler: PropTypes.func.isRequired,
  filterHeightHandler: PropTypes.func.isRequired,
  filterWidth: PropTypes.number.isRequired,
  filterHeight: PropTypes.number.isRequired,
}

export default SizeSearch;
