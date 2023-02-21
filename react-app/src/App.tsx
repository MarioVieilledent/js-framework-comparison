import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageComponent from './components/MessageComponent';

const title: string = 'React app';
const LS: string = 'jsFrameworkComparison-react-messages';

function App() {
  const [count, setCount] = useState<number>(0);
  const [list, setList] = useState<Message[]>([]);

  useEffect(() => {
    let interval = setInterval(() => { setCount((c) => c + 1); }, 1000);
    setList(JSON.parse(window.localStorage.getItem(LS) ?? '[]') as Message[]);
    return () => clearInterval(interval);
  }, []);

  const sendMessage = (event: any) => {
    setList([...list, { message: event.target.value, date: new Date() }]);
    window.localStorage.setItem(LS, JSON.stringify(list));
  }

  const emptyList = () => {
    setList([]);
    window.localStorage.setItem(LS, '[]');
  }

  return (
    <div className="App">
      <header className="header">
        <h1>{title}</h1>
        <img src={logo} className="logo" alt="logo" />
        <span>{count}</span>
      </header>
      <div className="content">
        <input type="text" onBlur={(event) => sendMessage(event)} />
        {list.map((elem, i) => <MessageComponent key={i} message={elem} />)}
        <button onClick={() => emptyList()}>Empty</button>
      </div>
    </div>
  );
};

export type Message = {
  message: string;
  date: Date;
}

export default App;