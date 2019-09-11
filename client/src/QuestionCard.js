import React from 'react';
import './App.css';



class QuestionCard extends React.Component{
    constructor(){
        super()

        this.handleQuestion = this.handleQuestion.bind(this);
        this.handleYes = this.handleYes.bind(this);
        this.handleNo = this.handleNo.bind(this);

        this.state = {
            question : "Is it to do with activities?",
            yesClick: false,
            noClick: false,
            pauseState: false,
          }


      }

      handleYes() {
        this.setState({yesClick: true},
          function(){
            this.setState({pauseState:true}, function(){console.log(this.state)}.bind(this));
            this.handleQuestion();
          }.bind(this));

          console.log(this.state);

      }

      handleNo() {
        this.setState({noClick: true},
          function(){
            console.log(this.state);
          }.bind(this));

      }

      handleQuestion(){
        this.setState({pauseState: false})
          if(this.state.yesClick === true && this.state.pauseState === false) {
            this.setState({question: 'is it a sport'});
            if(this.state.yesClick === true) {
              this.setState({question: 'does it involve a ball?'});
            }
          };
      }

      componentDidMount() {
        this.handleQuestion();
      }


render(){
  return(
    <div className="Question-container">
    <label> {this.state.question} </label>
      <div className="Button-container">
        <button className="btn btn-success" onClick={this.handleYes}> Yes </button>
        <button className="btn btn-success" onClick={this.handleNo}> No </button>
      </div>
    </div>
      );
  }
}

export default QuestionCard;
