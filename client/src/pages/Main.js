import React from 'react';
import NavigationBar from '../components/NavigationBar'
import ContentContainer from '../components/ContentContainer';
import Button from '../components/Button';

class Main extends React.Component{
  constructor(){
    super()
    this.state={ 
      ColorChange: ""}
  }
  
  changeColour(colour){
    this.setState({ColourChange: colour})
  }
  
  render(){
    return(
      <div className="grid-container">
        <div className="header bg-purple large-text">
          <NavigationBar/>
        </div>
        <section className={"flex-column content-one " + this.state.ColourChange}>
          <ContentContainer
            onMouseEnter={() => this.changeColour('bg-blue')}
            onMouseLeave={() => this.changeColour('bg-mint')}
            title={'Lorem Ipsum'}
            content={'my content'}
            styles={"large-text flex-column"}
          />
          <Button
            text={'More about me'}
            styles={'bg-yellow margin-no-top'}
          />
        </section>
        <section className="content-two bg-blue flex-row space-evenly">
          <div className="flex-column width-height-full">
            <ContentContainer
              title={'my title'}
              content={'my content 1'}
              styles={"bg-mint height-half "}
            />
            <Button
              text={'More of my work'}
              styles={'bg-mint width-full margin-no-top'}
            />
          </div>
            <div className="flex-column width-height-full">
              <ContentContainer
                title={'my title'}
                content={'my content 2'}
                styles={"bg-yellow height-half"}
              />
              <Button
                text={'More of my work'}
                styles={'bg-mint width-full margin-no-top'}
              />
            </div>
          </section>
        <div className="footer bg-purple"></div>
      </div>
    );
  }
}

export default Main;