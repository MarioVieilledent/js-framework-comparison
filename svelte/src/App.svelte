<script lang="ts">
  import { onDestroy } from "svelte";
  import logo from "./assets/svelte.svg";
  import MessageComponent from "./components/MessageComponent.svelte";

  const title: string = "Svelte app";
  const LS: string = "jsFrameworkComparison-svelte-messages";

  let count: number = 0;
  let interval = setInterval(() => {
    count++;
  }, 1000);
  onDestroy(() => clearInterval(interval));

  $: console.log("new value for count: " + count);

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

<div class="App">
  <header class="header">
    <h1>{title}</h1>
    <img src={logo} class="logo" alt="logo" />
    <span>{count}</span>
  </header>
  <div class="content">
    <input type="text" on:change={(event) => sendMessage(event)} />
    {#each list as elem}
      <MessageComponent message={elem} />
    {/each}
    <button on:click={() => emptyList()}>Empty</button>
  </div>
</div>

<style>
  .App {
    width: 100%;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ccc;
    padding: 12px;
    width: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px;
    width: 100%;
  }

  .logo {
    width: 72px;
    height: 72px;
  }
</style>
