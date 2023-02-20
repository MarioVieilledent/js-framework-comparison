# JS Framework Comparison of size of builded apps

![GitHub language count](https://img.shields.io/github/languages/count/MarioVieilledent/js-framework-comparison)
![GitHub top language](https://img.shields.io/github/languages/top/MarioVieilledent/js-framework-comparison)

Comparison of size of
1. Built apps and minified JS
2. Size of development folders

For some of the most used Javascript Framework.

For each framework is developped a small application that handles a counter and a list that can be dynamically appended and cleared by UI.

## Results

|                    | React | Angular | Vue | Svelte | Solid  | Vanilla JS |
| ------------------ | ----- | ------- | --- | ------ | ------ | ---------- |
| Size of builded JS | -     | 138     | -   | 6.73   | 9.96   | 1.11       |
| Size of dev folder | -     | 481411  | -   | 103418 | 96100  | 3.50       |
| Version            | -     | 14.2.3  | -   | 3.55.1 | 1.6.10 | -          |

### Size of builded framework

Less is better.

<!-- <div style="display: flex;">
<div style="width: 84px; height: 11.1px; background-color: #A89610; padding: 6px 12px; box-sizing: border-box; border-radius: 6px; margin-right: 6px; font-weight: 500;">Vanilla<br>1.1 KB</div>
<div style="width: 84px; height: 67.3px; background-color: #F23900; padding: 6px 12px; box-sizing: border-box; border-radius: 6px; margin-right: 6px; font-weight: 500;">Svelte<br>6.7 KB</div>
<div style="width: 84px; height: 99.6px; background-color: #5389C7; padding: 6px 12px; box-sizing: border-box; border-radius: 6px; margin-right: 6px; font-weight: 500;">Solid<br>10 KB</div>
<div style="width: 84px; height: 1380px; background-color: #C3012E; padding: 6px 12px; box-sizing: border-box; border-radius: 6px; margin-right: 6px; font-weight: 500;">Angular<br>138 KB</div>
</div> -->

![Comparison Chart](/chart.png)

## Details on each framework

### Solid

- Size of development folder: 91.6 MB
- Contains:
  - Files: 2307
  - Folders: 361
- Size of builded app: 27.7 KB
- Size of minified JS files: 9.96 KB

- Components: functions that returns JSX or TSX
- State: `const [a, setA] = createSignal('val');`
- Primitives: `createEffect(() => console.log(a + ' updated'));` and `const aa: Type = createMemo(() => a + a;`

> `npm i`

> `npm run dev`

> `npm run build`

### Svelte

- Size of development folder: 98.6 MB
- Contains:
  - Files: 1535
  - Folders: 341
- Size of builded app: 9.78 KB
- Size of minified JS files: 6.73 KB

- Components: `.svelte` file containing script, template and style parts (separated)
- State: `let a: Type = 'val';`
- Primitives: `$: console.log(a + ' updated'));` Simplest and cleanest syntax so far

> `npm i`

> `npm run dev`

> `npm run build`

### Angular

- Size of development folder: 459 MB
- Contains:
  - Files: 40942
  - Folders: 3676
- Size of builded app: 153 KB
- Size of minified JS files: 138 KB

- Components: generated folder containing 4 files, model and controler is a TypeScript class
- State: `a: Type = 'val';` as a class attribute (in ts file, need to access them with `this` keyword)
- Primitives: Not native to Angular, pretty verbose

> `npm i`

> `ng s`

> `ng build --configuration production`

### Vanilla JS

- Size of development folder: 3.50 KB
- Contains:
  - Files: 4
  - Folders: 1
- Size of builded app: 3.50 KB
- Size of JS: 1.11 KB

- Components: import js files
- State: need to work with the DOM
- Primitives: need to code one's own framework

## Expressiveness

Here I put side to side all code to manage the list (creation, push, empty)

## Angular



### Svelte

```ts
<script lang="ts">
  import MessageComponent from "./components/MessageComponent.svelte";

  const LS: string = "jsFrameworkComparison-svelte-messages";
  let list: Message[] = [];
  list = JSON.parse(window.localStorage.getItem(LS) ?? "[]") as Message[];

  function sendMessage(event: any) {
    list.push({ message: event.target.value, date: new Date() });
    list = list;
    window.localStorage.setItem(LS, JSON.stringify(list));
  }

  function emptyList() {
    list = [];
    window.localStorage.setItem(LS, "[]");
  }

  type Message = {
    message: string;
    date: Date;
  };
</script>

<input type="text" on:change={(event) => sendMessage(event)} />
{#each list as elem}
  <MessageComponent message={elem} />
{/each}
<button on:click={() => emptyList()}>Empty</button>
```

### Solid

```ts
import { Component, createEffect, createSignal } from 'solid-js';
import MessageComponent from './components/MessageComponent';

const App: Component = () => {
  const LS: string = 'jsFrameworkComparison-solid-messages';
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
      <div class={styles.content}>
        <input type="text" onchange={(event) => sendMessage(event)} />
        {list().map(elem => <MessageComponent message={elem} />)}
        <button onclick={() => emptyList()}>Empty</button>
      </div>
  );
};

export type Message = {
  message: string;
  date: Date;
}

export default App;
```

## Vanilla JS

```html
<input type="text" onchange="sendMessage(event)" />
<div id="MessageComponent"></div>
<button onclick="emptyList()">Empty</button>
```

```js
MessageComponent = document.getElementById('MessageComponent');
const LS = "jsFrameworkComparison-vanilla-messages";
document.getElementById('title').innerHTML = title;

let list = [];

list = JSON.parse(window.localStorage.getItem(LS) ?? "[]");

list.forEach(m => renderMessage(m));

function sendMessage(event) {
    const message = { message: event.target.value, date: new Date() };
    list.push(message);
    renderMessage(message);
    window.localStorage.setItem(LS, JSON.stringify(list));
}

function renderMessage(message) {
    MessageComponent.innerHTML += `<div class="elem">
    <span class="message">${message.message}</span>
    <span class="date">${message.date.toString()}</span>
  </div>`;
}

function emptyList() {
    list = [];
    MessageComponent.innerHTML = '';
    window.localStorage.setItem(LS, "[]");
}
```