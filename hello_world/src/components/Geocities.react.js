import React, { Component } from 'react';

class Geocities extends Component {
  render() {
    return (
      <div>
        <div style={ { textAlign: 'center', marginTop: '50px' } }>
          <img src="http://www.wonder-tonic.com/geocitiesizer/images/genie.gif" />
          <img src="http://www.wonder-tonic.com/geocitiesizer/images/dancingbaby.gif" />
        </div>
        <marquee>
          <h1>Welcome to the Internet</h1>
        </marquee>
        <marquee>
          <h2>I will be your guide</h2>
        </marquee>
        <div style={ { textAlign: 'center', fontSize: '24px' } }>
          @RobertWPearce<br /><br />
          The Iron Yard.com
        </div>
        <div dangerouslySetInnerHTML={ this.nyanCat() }></div>
      </div>
    );
  }

  nyanCat() {
    return { __html: '<marquee direction="right"><img src="https://38.media.tumblr.com/8210fd413c5ce209678ef82d65731443/tumblr_mjphnqLpNy1s5jjtzo1_400.gif" /></marquee>' };
  }
}

export default Geocities;
