import { Component, createEffect, createSignal, onCleanup } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import MessageComponent from './components/MessageComponent';

const App: Component = () => {

  const title: string = 'Solid app';
  const LS: string = 'jsFrameworkComparison-solid-messages';

  const [count, setCount] = createSignal<number>(0);
  let interval = setInterval(() => { setCount(count() + 1) }, 1000);
  onCleanup(() => clearInterval(interval));

  createEffect(() => console.log('new value for count: ' + count()));

  const [list, setList] = createSignal<Message[]>([]);

  setList(JSON.parse(window.localStorage.getItem(LS) ?? '[]') as Message[]);

  const sendMessage = (event: any) => {
    setList([...list(), { message: event.target.value, date: new Date() }]);
    window.localStorage.setItem(LS, JSON.stringify(list()));
  }

  const emptyList = () => {
    setList([]);
    window.localStorage.setItem(LS, '[]');
  }

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1>{title}</h1>
        <img src={logo} class={styles.logo} alt="logo" />
        <span>{count()}</span>
      </header>
      <div class={styles.content}>
        <input type="text" onchange={(event) => sendMessage(event)} />
        {list().map(elem => <MessageComponent message={elem} />)}
        <button onclick={() => emptyList()}>Empty</button>
      </div>
    </div>
  );
};

export type Message = {
  message: string;
  date: Date;
}

export default App;
