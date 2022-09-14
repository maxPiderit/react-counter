import logo from './logo.svg';
import './App.css';
import index from './index.js';

function Counter(props) {
  return (
    <div className="big-counter">
      <div className="counter">
        <div className="icon digito"><img src="time.png" alt=""></img></div>
        <div className="digito-cuatro digito">{props.cuatro % 10}</div>
        <div className="digito-tres digito">{props.tres % 10}</div>
        <div className="digito-dos digito">{props.dos % 10}</div>
        <div className="digito-uno digito">{props.uno % 10}</div>
      </div>
    </div>

  );
}

export default Counter

