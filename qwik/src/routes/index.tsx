import { component$, useSignal, useBrowserVisibleTask$, $, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import './App.css';
import MessageComponent from './components/MessageComponent';

const title: string = 'Qwik app';
const LS: string = 'jsFrameworkComparison-qwik-messages';

export type Message = {
  message: string;
  date: Date;
}

export default component$(() => {
  const count = useSignal<number>(0);
  const list = useStore<{ value: Message[] }>({ value: [] });

  const sendMessage = $((event: any) => {
    list.value = [...list.value, {message: event.target.value, date: new Date()}];
    window.localStorage.setItem(LS, JSON.stringify(list.value));
  });

  const emptyList = $(() => {
    list.value = [];
    window.localStorage.setItem(LS, '[]');
  });

  useBrowserVisibleTask$(() => {
    setInterval(() => { count.value++; }, 1000);
    list.value = JSON.parse(window.localStorage.getItem(LS) ?? '[]') as Message[];
  });

  return (
    <div class="App">
      <header class="header">
        <h1>{title}</h1>
        <img src="favicon.svg" class="logo" alt="logo" />
        <span>{count.value}</span>
      </header>
      <div class="content">
        <input type="text" onChange$={(event) => sendMessage(event)} />
        <span>{list.value.length}</span>
        {list.value.map((elem, i) => (<MessageComponent key={i} message={elem} />))}
        <button onClick$={() => emptyList()}>Empty</button>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};