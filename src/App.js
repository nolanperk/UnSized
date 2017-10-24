import React, { Component } from 'react';
import axios from 'axios';
import './styles/App.css';

import FilterContainer from './FilterContainer';
import FeedContainer from './FeedContainer';



class App extends Component {
  state = {
    filterSearch: '',
    filterWidth: '',
    filterHeight: '',
    parameters: '',
    pics: [],
    feedLoading: false,
  };

  filterSearchHandler = e => {
    this.setState({
      filterSearch: e.target.value
    });
  }
  filterWidthHandler = e => {
    this.setState({
      filterWidth: e.target.value
    });
  }
  filterHeightHandler = e => {
    this.setState({
      filterHeight: e.target.value
    });
  }
  submitHandler = e => {
    e.preventDefault();
    let imgSearch = this.state.filterSearch;
    let imgWidth = this.state.filterWidth;
    let imgHeight = this.state.filterHeight;
    this.setState({
      parameters: `count=10&w=${imgWidth}&h=${imgHeight}&query=${imgSearch}`,
      feedLoading: true
    })
    setTimeout((function() {
      axios.get(`https://api.unsplash.com/photos/random/?client_id=908d18974a71cf3e3407fb7a22361a912efd8ce3e5823c26d55c2488103f9010&count=12&w=${imgWidth}&h=${imgHeight}&query=${imgSearch}`)
      .then(response => {
        this.setState({
          pics: response.data
        });
      }).then(e => {
        setTimeout((function() {
          this.setState({
            feedLoading: false
          });
        }).bind(this), 1000);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

    }).bind(this), 250);

  }



  render() {
    return (
      <div className="App">
        <header className="FilterWrapper">
          <h1>Un<em>Sized</em></h1>
          <FilterContainer
            filterSearch={this.state.filterSearch}
            filterWidth={this.state.filterWidth}
            filterHeight={this.state.filterHeight}

            submitHandler = {this.submitHandler}
            filterSearchHandler = {this.filterSearchHandler}
            filterWidthHandler = {this.filterWidthHandler}
            filterHeightHandler = {this.filterHeightHandler}
          />
        </header>
        <div className="FeedWrapper">
          <FeedContainer
            pics={this.state.pics}
            feedLoading={this.state.feedLoading}
          />
        </div>
      </div>
    );
  }
}

export default App;
