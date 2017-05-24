import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="aboutBody">
        <h4 className="fadedViewTitles">ABOUT MST3K QUICK GUIDE</h4>
        <div className="aboutText">
          <p>Episode data from <a href="https://github.com/edplato/mst3k-episodes" target="_blank">MST3K JSON</a></p>
        	<p>MST3K Episode Guide GitHub found <a href="https://github.com/edplato/mst3kspa" target="_blank">here</a></p>
        	<p>Contact <a href="mailto:edplatomail@gmail.com">me</a> with any questions</p>
        </div>
        <div className="aboutFooter"></div>
      </div>
    );
  }
}

export default About;