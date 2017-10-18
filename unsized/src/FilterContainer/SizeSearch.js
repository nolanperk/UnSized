import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SizeSearch extends Component {
  render() {
    return (
      <div className="SizeSearch">
        <input
          type="number"
          placeholder="Width"
          className="sizeInput--Width"
          onChange={this.props.filterWidthHandler}
          value={this.props.filterWidth}
        />
        <span> x </span>
        <input
          type="number"
          placeholder="Height"
          className="sizeInput--Height"
          onChange={this.props.filterHeightHandler}
          value={this.props.filterHeight}
        />
      </div>
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
