import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ItemMeta extends Component {
  render() {
    let userStuff = this.props.creator;
    console.log(userStuff);
    return (
      <div className="ItemMeta">
        <a href={userStuff.links.html} target="_blank"><p>{userStuff.name}</p></a>
        <a href={this.props.downUrl} download="unsized" className="ItemMeta--download"></a>
      </div>
    );
  }
}
ItemMeta.PropTypes ={
  downUrl: PropTypes.func.isRequired,
  unsplashLink: PropTypes.func.isRequired,
  creator: PropTypes.func.isRequired,
}
export default ItemMeta;
