
import React from 'react';
import {Question, Answer} from './Data';
import {Animated} from "react-animated-css";

function canOpen(requestedDate, today) {
  return requestedDate.getFullYear() === today.getFullYear() &&
    requestedDate.getMonth() === today.getMonth() &&
    requestedDate.getDate() <= today.getDate();
}

class Quiz extends React.Component {
    constructor(props) {
    super(props);
    this.state = {

      date: props.date,
      quizId: props.date.getDate(),
      showAnswer: false,
      question: '',
      answer: '',
      canOpen: false,
      isOpen: false,
      isSolved: false,
    };
    this.handleClickshowAnswer = this.handleClickshowAnswer.bind(this);
    this.handleClickOnOpen = this.handleClickOnOpen.bind(this);
  }

  componentDidMount() {

    let today = new Date();
    this.setState({canOpen: canOpen(this.state.date, today)});

    const isSolved = localStorage.getItem(this.state.date.getDate()) === 'true';
    this.setState({ isSolved });


    this.setState(state => ({
      question: Question(this.state.quizId)
    }));

    this.setState(state => ({
      answer: Answer(this.state.quizId)
    }));
  }

  componentWillUnmount() {  }

  handleClickOnOpen() {
    const { isOpen } = this.state;
    this.setState(state => ({
      isOpen: !isOpen
    }));

  }

  handleClickshowAnswer() {
    const { showAnswer, date } = this.state;

    this.setState(state => ({
      showAnswer: !showAnswer
    }));
    localStorage.setItem(date.getDate(), true);
  }



  render() {

      let doorStyle = "flip-card is-closed_" + this.state.quizId;

      let buttonVisibility = this.state.canOpen ? "btn shadow-none" : "btn shadow-none invisible";
      let doorNumberStyle = "door-number";

      if(this.state.isSolved){
        doorStyle = "flip-card is-solved_" + this.state.quizId;
        buttonVisibility += " solved";
        doorNumberStyle = "door-number-solved";
      }
      let closed =
      <div>
        <div className={doorStyle}>
          <div className="flip-card-inner">
            <div className= "flip-card-transparent text-right">
              <h1 className={doorNumberStyle}>{this.state.date.getDate()}</h1>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center button-panel">
            <button onClick={this.handleClickOnOpen} className={buttonVisibility}>
              Öffnen
            </button>
          </div>
        </div>
      </div>;


      let divClass = "flip-card";
      if(this.state.isOpen){
        if(this.state.showAnswer){
          divClass = "flip-card is-open flip-card-flip";
        }else{
          divClass = "flip-card is-open flip-card";
        }
      }

      let button;
      button = <button onClick={this.handleClickshowAnswer} className={this.state.isOpen ? "btn shadow-none" : "btn shadow-none"}>
        {this.state.showAnswer ? 'Zurück zur Frage' : 'Zur Lösung'}
      </button>;

      let front;
      let back;
      front = <div>{this.state.question}</div>;
      back = <div>{this.state.answer}</div>;

      let quiz = <Animated animationIn="flipInX" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
      <div>
        <div className={divClass}>
          <div className="flip-card-inner">
            <div className={this.state.isOpen ? "flip-card-front" : "flip-card-front-transparent"}>
              {front}
            </div>
            <div className="flip-card-back">
              {back}
            </div>
          </div>
        </div>
        <div>
          <div className="text-center button-panel">{button}</div>
        </div>
      </div>
      </Animated>

      let content = closed;
      if(this.state.isOpen){
        content = quiz;
      }

      return  (
        <div>{content}</div>
      );
    }

}

export default Quiz;
