import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

class SmoothScrollButton extends React.Component {
  scrollToTop() {
    scroll.scrollToTop({
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

  render() {
    return (
      <button className='scrool' onClick={this.scrollToTop}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 14" style={{ fill: '#fff', transform: '', msFilter: '' }}>
      <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"></path>
    </svg></button>
    );
  }
}

export default SmoothScrollButton;
