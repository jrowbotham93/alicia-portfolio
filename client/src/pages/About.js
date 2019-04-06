import React from 'react';
import NavigationBar from '../components/NavigationBar'
import ContentContainer from '../components/ContentContainer';

class About extends React.Component{
  constructor(){
    super()
    this.state={}
  }
  
  render(){
    return(
      <div className="grid-container">
        <div className="header bg-purple large-text ">
          <NavigationBar/>
        </div>
        <div className={"flex-column content-one " + this.state.ColourChange}>
          <ContentContainer
            title={'my title'}
            content={'my content 0'}
            styles={"large-text flex-column"}
          />
        </div>
        <div className="content-two bg-yellow flex-column">
          <ContentContainer
            title={'my title'}
            content={'my content 2'}
            styles={"flex-column bg-purple"}
          />
        </div>
        <div className="footer bg-mint flex-column"></div>
      </div>
    );
  }
}

export default About;