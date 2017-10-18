import React, { Component } from 'react';
import PropTypes from 'prop-types';


class FilterSearch extends Component {
  render() {
    return (
      <div className="FilterSearch">
        <input
          type="text"
          placeholder="filter images"
          onChange={this.props.filterSearchHandler}
          value={this.props.filterSearch}
        />
      </div>
    );
  }
}

FilterSearch.PropTypes ={
  filterSearchHandler: PropTypes.func.isRequired,
  filterSearch: PropTypes.func.isRequired,
}

export default FilterSearch;
