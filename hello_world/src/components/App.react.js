import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <marquee>
          <h1>Welcome to the Internet</h1>
        </marquee>
        <marquee>
          <h2>I will be your guide</h2>
        </marquee>
        <div style={ { textAlign: 'center', fontSize: '24px' } }>@RobertWPearce</div>
        <div dangerouslySetInnerHTML={ this.nyanCat() }></div>
      </div>
    );
  }

  nyanCat() {
    return { __html: '<marquee direction="right"><img src="http://files.gamebanana.com/img/ico/sprays/_1317-.gif" /></marquee>' };
  }
}

export default App;
