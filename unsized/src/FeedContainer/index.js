import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FeedItem from './FeedItem';



class FeedContainer extends Component {

  render() {

    let pictures = this.props.pics;
    let isLoading = this.props.feedLoading;

    let pics = pictures.map(pic =>
      <li>
        <FeedItem
          key={pic.id}
          regUrl={pic.urls.regular}
          downUrl={pic.urls.custom}
          unsplashLink={pic.links.html}
          creator={pic.user}
        />
      </li>
    );

    if (isLoading) {
      return(
        <p>Loading</p>
      );
    } else {
      return(
        <ul className="FeedContainer">
          {pics}
        </ul>
      );
    }
  }
}

FeedContainer.PropTypes ={
  pics: PropTypes.array.isRequired,
  feedLoading: PropTypes.func.isRequired,
}

export default FeedContainer;
