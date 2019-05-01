import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Number = props => (
  <button onClick={props.onClick}> {props.number} </button>
);
const ScreenDisplay = props => <p>{props.output}</p>;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: "", cur: "", last: "", operator: "", last_operator: "", flag:0 };
  }

  handle_clear() {
    this.setState({ display: "", cur: "", last: "", operator: "", last_operator: "",flag:0 });
  }

  handle_numbers(props) {
    let passed_num = this.state.display + props.number;
    if(this.state.flag === 1){
      this.setState({ display: props.number, cur: this.state.cur + props.number, flag:0 });
    }else{
      this.setState({ display: passed_num, cur: this.state.cur + props.number, flag:0 });
    }
  }

  handle_add(){
    return parseInt(this.state.last, 10) + parseInt(this.state.cur, 10);
  }

  handle_subtract(){
    return parseInt(this.state.last, 10) - parseInt(this.state.cur, 10);
  }

  handle_multiply(){
    return parseInt(this.state.last, 10) * parseInt(this.state.cur, 10);
  }

  handle_divide(){
    return parseInt(this.state.last, 10) / parseInt(this.state.cur, 10);
  }


  handle_operators(props) {
    var math = this.state.display;
    if (this.state.last_operator === "+" && this.state.last !== "") {
      math = this.handle_add();
    } else if (this.state.last_operator === "x" && this.state.last !== "") {
      math = this.handle_multiply();
    } else if (this.state.last_operator === "/" && this.state.last !== "") {
      math = this.handle_divide();
    } else if (this.state.last_operator === "-" && this.state.last !== "") {
      math = this.handle_subtract();
    }
      this.setState({
        display: math,
        cur: "",
        last: math,
        last_operator: props.operator,
        flag:1
      });

  }

  render() {
    return (
      <div className="App">
        <div>
          <ScreenDisplay output={this.state.display} />
        </div>
        <span>
          <Number
            number="7"
            onClick={() => this.handle_numbers({ number: "7" })}
          />
          <Number
            number="8"
            onClick={() => this.handle_numbers({ number: "8" })}
          />
          <Number
            number="9"
            onClick={() => this.handle_numbers({ number: "9" })}
          />
          <Number number="/" onClick={() => this.handle_operators({ operator: "/" })} />
        </span>
        <br />
        <span>
          <Number
            number="4"
            onClick={() => this.handle_numbers({ number: "4" })}
          />
          <Number
            number="5"
            onClick={() => this.handle_numbers({ number: "5" })}
          />
          <Number
            number="6"
            onClick={() => this.handle_numbers({ number: "6" })}
          />
          <Number number="x" onClick={() => this.handle_operators({ operator: "x" })} />
        </span>
        <br />
        <span>
          <Number
            number="1"
            onClick={() => this.handle_numbers({ number: "1" })}
          />
          <Number
            number="2"
            onClick={() => this.handle_numbers({ number: "2" })}
          />
          <Number
            number="3"
            onClick={() => this.handle_numbers({ number: "3" })}
          />
          <Number number="-" onClick={() => this.handle_operators({ operator: "-" })} />
        </span>
        <br />
        <span>
          <Number
            number="0"
            onClick={() => this.handle_numbers({ number: "0" })}
          />
          <Number
            number="."
            onClick={() => this.handle_numbers({ number: "." })}
          />
          <Number
            number="="
            onClick={() => this.handle_operators({ operator: "=" })}
          />
          <Number
            number="+"
            onClick={() => this.handle_operators({ operator: "+" })}
          />
        </span>
        <br />
        <span>
          <Number number="C" onClick={() => this.handle_clear()} />
        </span>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
