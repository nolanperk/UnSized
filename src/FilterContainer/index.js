import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FilterSearch from './FilterSearch';
import SizeSearch from './SizeSearch';


class FilterContainer extends Component {


  render() {
    return (
      <form className="FilterContainer" onSubmit={this.props.submitHandler}>

        <FilterSearch
          filterSearchHandler={this.props.filterSearchHandler}
          filterSearch={this.props.filterSearch}

        />
        <SizeSearch
          filterWidthHandler={this.props.filterWidthHandler}
          value={this.props.filterWidth}
          value={this.props.filterHeight}
        />

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
