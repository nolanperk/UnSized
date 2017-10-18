import React, { Component } from 'react';
import PropTypes from 'prop-types';




class FilterContainer extends Component {


  render() {
    return (
      <form className="FilterContainer" onSubmit={this.props.submitHandler}>

        <span className="FilterSearch">
          <input
            type="text"
            placeholder="filter images"
            onChange={this.props.filterSearchHandler}
            value={this.props.filterSearch}
          />
        </span>

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

        <button type="submit">Go!</button>

      </form>
    );
  }
}

FilterContainer.PropTypes ={
  submitHandler: PropTypes.func.isRequired,
  filterSearchHandler: PropTypes.func.isRequired,
  filterWidthHandler: PropTypes.func.isRequired,
  filterHeightHandler: PropTypes.func.isRequired,
  filterSearch: PropTypes.func.isRequired,
  filterWidth: PropTypes.number.isRequired,
  filterHeight: PropTypes.number.isRequired,
}

export default FilterContainer;
