import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemMeta from './ItemMeta';


class FeedItem extends Component {
  render() {
    return (
      <div className="FeedItem">
        <img alt={this.props.unsplashLink} src={this.props.regUrl} />
        <ItemMeta
          creator={this.props.creator}
          downUrl={this.props.downUrl}
          unsplashLink={this.props.unsplashLink}
         />
      </div>
    );
  }
}

FeedItem.PropTypes ={
  unsplashLink: PropTypes.func.isRequired,
  url: PropTypes.func.isRequired,
  creator: PropTypes.func.isRequired,
  regUrl: PropTypes.func.isRequired,
  downUrl: PropTypes.func.isRequired,
  unsplashLink: PropTypes.func.isRequired,
}
export default FeedItem;
