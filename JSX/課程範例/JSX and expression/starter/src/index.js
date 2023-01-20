import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const greetings = [
  '歡迎回來',
  'Welcome Back',
]
const user = 'Andy'
const language = 'zh-tw'

const defaultGreeting = <p>歡迎回來</p>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(greetingPage());
