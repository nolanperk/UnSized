import React, { Component } from 'react';
import PropTypes from 'prop-types';


class FilterSearch extends Component {
  render() {
    return (
      <span className="FilterSearch">
        <input
          type="text"
          placeholder="filter images"
          onChange={this.props.filterSearchHandler}
          value={this.props.filterSearch}
        />
      </span>
    );
  }
}

FilterSearch.PropTypes ={
  filterSearchHandler: PropTypes.func.isRequired,
  filterSearch: PropTypes.func.isRequired,
}

export default FilterSearch;
