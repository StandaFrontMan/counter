import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

export default function GreetingAndTime() {

  const user = {
    firstName: 'Stas',
    secondName: 'Vinogradov',
  }

  const getFormatUserName = () => {
    if (user.firstName) {
      return user.firstName + ' ' + user.secondName;
    } else {
      return 'Stranger';
    };
  }

  const renderGreetingAndTime = () => {
    const element = (
      <div>
        <h1>Hello, {getFormatUserName(user)} !</h1>
        <h2>Date is {new Date().toLocaleDateString()} and Time is {new Date().toLocaleTimeString()}.</h2>
      </div>
    )
    root.render(element);
  }
  setInterval(renderGreetingAndTime, 1000)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(GreetingAndTime())
