import { component$, useSignal, useTask$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import './App.css';
import MessageComponent from './components/MessageComponent';

const title: string = 'Qwik app';

export type Message = {
  message: string;
  date: Date;
}

export default component$(() => {
  const count = useSignal<number>(0);
  const list = useSignal<Message[]>([]);

  const sendMessage = $((event: any)=>{
    list.value.push({
        message: event.target.value,
        date: new Date()
    });
  });
    
  const emptyList = $(() => {
    list.value = [];
  });

  useTask$(async () => {
    setInterval(() => { count.value ++; }, 1000);
    list.value = [];
  });

  return (
    <div class="App">
      <header class="header">
        <h1>{title}</h1>
        <img src="favicon.svg" class="logo" alt="logo" />
        <span>{count.value}</span>
      </header>
      <div class="content">
        <input type="text" onInput$={(event) => sendMessage(event)} />
        {list.value.map((elem, i) => <MessageComponent key={i} message={elem} />)}
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
