# JS Framework Comparison of size of built apps

![GitHub language count](https://img.shields.io/github/languages/count/MarioVieilledent/js-framework-comparison)
![GitHub top language](https://img.shields.io/github/languages/top/MarioVieilledent/js-framework-comparison)

Comparison of size of
1. Built apps and minified JS
2. Size of development folders
3. Expressiveness and Simplicity of syntax

For some of the most used Javascript Framework.

For each framework is developed a small application that handles a counter and a list that can be dynamically appended and cleared by UI.

> The well-known [js web frameworks benchmark](https://krausest.github.io/js-framework-benchmark/) by **Krausest** focuses on CPU speed execution, Lighthouse mobile simulation, and Memory allocation. Though it is useful to be aware of the performance of the framework we work with or we want to choose, an important aspect is the size of the final built bundle containing minified js code. Nowadays, the majority of devices can easily run complex websites. But a website is meant to be refreshed a lot, sometimes every time the user changes the page. Here comes the question of the size of the web application, the size impacts the speed for loading the page, the speed for interpreting the files, therefore the user experience, and also the traffic on the network. We want to keep the bundle website as small as possible to benefit a low network traffic, and the best user experience possible on loading time. This project analyses the sizes of the built minified js bundle for the same simple web application in some of the most used js frameworks.

## Results

|                         | React `create-react-app` | React `vite` | Angular | Svelte | Vue    | Solid  | Qwik   | Vanilla JS |
| ----------------------- | ------------------------ | ------------ | ------- | ------ | ------ | ------ | ------ | ---------- |
| Size of built JS (KB)   | 531                      | 140          | 138     | 6.73   | 53.6   | 9.96   | 54.0   | 1.11       |
| Size of dev folder (KB) | 292511                   | 102757       | 481411  | 103418 | 107088 | 96100  | 168932 | 3.50       |
| Version                 | 18.2.0                   | 18.2.0       | 14.2.3  | 3.55.1 | 3.2.45 | 1.6.10 | 0.20.1 | -          |

## Size of built framework in KB

Lower is better.

![Comparison Chart](/chartBuilt.png)

> **Qwik** is a little bit different because all js is not interpreted after the page is rendered, though the minimum bundle size remains large (42.5 KB).

## Size of development folder in MB

Lower is better.

![Comparison Chart](/chartDev.png)

## Expressiveness and Simplicity of syntax

In my opinion:
- **Svelte** and **Vue** *(using Components API)* wins the battle, they provides the simplest and most declarative syntax.
- **Angular** has also a pretty clean syntax on top of a nice organisation of components. Though, it can result in a lot of src files to handle.
- **React** and **Solid** components return JSX that contains JavaScript expression, this focus on more and smaller reusable components (especially compared to Angular components), but have the drawback to mix HTML and JS code together, so it can be confusing, and the MVC is hard to achieve.

In any case, vanilla JS is to be avoided for any kind of projects.

## Details on each framework

### Solid

- Size of development folder: 91.6 MB
- Contains:
  - Files: 2307
  - Folders: 361
- Size of built app: 27.7 KB
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
- Size of built app: 9.78 KB
- Size of minified JS files: 6.73 KB

- Components: `.svelte` file separating script, template and style
- State: `let a: Type = 'val';`
- Primitives: `$: console.log(a + ' updated'));` Simplest and cleanest syntax so far

> `npm i`

> `npm run dev`

> `npm run build`

### Vue

- Size of development folder: 102 MB
- Contains:
  - Files: 3267
  - Folders: 499
- Size of built app: 59,2 KB
- Size of minified JS files: 53,6 KB

- Components: `.vue` file separating script, template and style. I used components API
- State: `let a: Type = 'val';`

> `npm i`

> `npm run dev`

> `npm run build`

### Angular

- Size of development folder: 459 MB
- Contains:
  - Files: 40942
  - Folders: 3676
- Size of built app: 153 KB
- Size of minified JS files: 138 KB

- Components: generated folder containing 4 files, model and controler is a TypeScript class
- State: `a: Type = 'val';` as a class attribute (in ts file, need to access them with `this` keyword)
- Primitives: Not native to Angular, pretty verbose

> `npm i`

> `ng s`

> `ng build --configuration production`

### React (create-react-app)

- Size of development folder: 278 MB
- Contains:
  - Files: 36800
  - Folders: 34805
- Size of built app: 540 KB
- Size of minified JS files: 531 KB

- Components: JSX or TSX files, function that returns JSX
- State: `const [a, setA] = useState<Type>('val');` as a class attribute 

> `npm i`

> `npm start`

> `npm run build`

### React (npm init vite@latest)

- Size of development folder: 97.9 MB
- Contains:
  - Files: 2254
  - Folders: 320
- Size of built app: 144 KB
- Size of minified JS files: 140 KB

> `npm i`

> `npm run dev`

> `npm run build`

### Qwik

- Size of development folder: 97.9 MB
- Contains:
  - Files: 6187
  - Folders: 969
- Size of built app: 75.1 KB
- Size of minified JS files: 54 KB

> `npm i`

> `npm start`

> `npm run build`

*I used SSG (Static Site Generation) for this Qwik project*
*`npm run qwik add`*

### Vanilla JS

- Size of development folder: 3.50 KB
- Contains:
  - Files: 4
  - Folders: 1
- Size of built app: 3.50 KB
- Size of JS: 1.11 KB

- Components: import js files
- State: need to work with the DOM
- Primitives: need to code one's own framework

## Expressiveness

Here I put side to side all code to manage the list (creation, push, empty)

### Angular

```html
<input type="text" (change)="sendMessage($event)" />
<app-message *ngFor="let elem of list" [message]="elem"></app-message>
<button (click)="emptyList()">Empty</button>
```

```ts
import { Component } from '@angular/core';
import { OnChange } from 'property-watch-decorator';

export class AppComponent {
  LS: string = "jsFrameworkComparison-angular-messages";

  list: Message[] = [];

  ngOnInit() {
    this.list = JSON.parse(window.localStorage.getItem(this.LS) ?? "[]") as Message[];
  }

  sendMessage(event: any) {
    this.list.push({ message: event.target.value, date: new Date() });
    window.localStorage.setItem(this.LS, JSON.stringify(this.list));
  }

  emptyList() {
    this.list = [];
    window.localStorage.setItem(this.LS, "[]");
  }
}

export type Message = {
  message: string;
  date: Date;
};
```

### Svelte

```html
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

### Vue

```html
<script setup lang="ts">
import { ref, type Ref } from 'vue';
import MessageComponent from './components/MessageComponent.vue';

const LS: string = "jsFrameworkComparison-vue-messages";
let list: Ref<Message[]> = ref([]);
list.value = JSON.parse(window.localStorage.getItem(LS) ?? "[]") as Message[];

function sendMessage(event: any) {
  list.value.push({ message: event.target.value, date: new Date() });
  window.localStorage.setItem(LS, JSON.stringify(list.value));
}

function emptyList() {
  list.value = [];
  window.localStorage.setItem(LS, "[]");
}

type Message = {
  message: string;
  date: Date;
};
</script>

<template>
      <input type="text" @change="(event) => sendMessage(event)" />
      <MessageComponent v-for="elem in list" :message="elem" />
      <button @click="() => emptyList()">Empty</button>
</template>
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

### React

```tsx
import { useEffect, useState } from 'react';
import MessageComponent from './components/MessageComponent';

const LS: string = 'jsFrameworkComparison-react-messages';

function App() {
  const [list, setList] = useState<Message[]>([]);

  useEffect(() => {
    setList(JSON.parse(window.localStorage.getItem(LS) ?? '[]') as Message[]);
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
    <div className="content">
      <input type="text" onBlur={(event) => sendMessage(event)} />
      {list.map((elem, i) => <MessageComponent key={i} message={elem} />)}
      <button onClick={() => emptyList()}>Empty</button>
    </div>
  );
};

export type Message = {
  message: string;
  date: Date;
}

export default App;
```

### Qwik

```tsx
import { component$, useSignal, useBrowserVisibleTask$, $, useStore } from '@builder.io/qwik';
import MessageComponent from './components/MessageComponent';

const title: string = 'Qwik app';
const LS: string = 'jsFrameworkComparison-qwik-messages';

export default component$(() => {
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
    list.value = JSON.parse(window.localStorage.getItem(LS) ?? '[]') as Message[];
  });

  return (
    <div class="content">
      <input type="text" onChange$={(event) => sendMessage(event)} />
      <span>{list.value.length}</span>
      {list.value.map((elem, i) => (<MessageComponent key={i} message={elem} />))}
      <button onClick$={() => emptyList()}>Empty</button>
    </div>
  );
});

export type Message = {
  message: string;
  date: Date;
}
```

### Vanilla JS

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