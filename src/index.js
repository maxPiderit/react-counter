import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './Counter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let counter = 0;
setInterval(() => {
  const cuatro = Math.floor(counter / 1000);
  const tres = Math.floor(counter / 100);
  const dos = Math.floor(counter / 10);
  const uno = Math.floor(counter);
  counter++;
  root.render(
    <React.StrictMode>
      <Counter uno={uno} dos={dos} tres={tres} cuatro={cuatro} />
    </React.StrictMode>
  );
}, 1000);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
