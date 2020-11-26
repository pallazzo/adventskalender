import React from 'react';
import Door from './Door';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {  }

  componentWillUnmount() {  }

  render() {
      return (
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="text-center">
              <h1 className="title-heading">Adventskalender</h1>
            </div>
          </div>
          <div className="row d-flex justify-content-between">
            <Door date={new Date('December 1, 2020')}/>
            <Door date={new Date('December 2, 2020')}/>
            <Door date={new Date('December 3, 2020')}/>
          </div>
          <div className="row d-flex justify-content-between">
            <Door date={new Date('December 4, 2020')}/>
            <Door date={new Date('December 5, 2020')}/>
            <Door date={new Date('December 6, 2020')}/>
          </div>
          <div className="row d-flex justify-content-between">
            <Door date={new Date('December 7, 2020')}/>
            <Door date={new Date('December 8, 2020')}/>
            <Door date={new Date('December 9, 2020')}/>
          </div>
          <div className="row d-flex justify-content-between">
            <Door date={new Date('December 10, 2020')}/>
            <Door date={new Date('December 11, 2020')}/>
            <Door date={new Date('December 12, 2020')}/>
          </div>
          <div className="row d-flex justify-content-between">
            <Door date={new Date('December 13, 2020')}/>
            <Door date={new Date('December 14, 2020')}/>
            <Door date={new Date('December 15, 2020')}/>
          </div>
          <div className="row d-flex justify-content-between">
            <Door date={new Date('December 16, 2020')}/>
            <Door date={new Date('December 17, 2020')}/>
            <Door date={new Date('December 18, 2020')}/>
          </div>
          <div className="row d-flex justify-content-between">
            <Door date={new Date('December 19, 2020')}/>
            <Door date={new Date('December 20, 2020')}/>
            <Door date={new Date('December 21, 2020')}/>
          </div>
          <div className="row d-flex justify-content-between">
            <Door date={new Date('December 22, 2020')}/>
            <Door date={new Date('December 23, 2020')}/>
            <Door date={new Date('December 24, 2020')}/>
          </div>
        </div>
      );
    }
}

export default App;
