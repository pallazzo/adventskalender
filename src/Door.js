import React from 'react';
import Quiz from './Quiz';

class Door extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.date,

    };

  }

  render() {
      return (
        <div className="col-sm door d-flex p-2 justify-content-center">
          <Quiz date={this.state.date}/>
        </div>
      );
    }
}

export default Door;
