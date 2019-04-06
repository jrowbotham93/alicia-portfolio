import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/nav-bar.scss'

class NavigationBar extends React.Component{
  constructor(props) {
    super(props);
      this.state = {};
      this.handleScroll = this.handleScroll.bind(this);
      }

  handleScroll() {
      this.setState({scroll: window.scrollY});
    }
  
  componentDidMount() {
        const nav = document.getElementById('nav');
        this.setState({top:nav.offsetTop, height:nav.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }
  
  componentDidUpdate() {
        this.state.scroll > this.state.top ? 
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;
    }
  
  render() {
    return (
      <nav id="nav" className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/about'>ABOUT</Link></li>
          <li>WORK</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    );
  }
}

export default NavigationBar;
