<script setup lang="ts">
import { ref, type Ref } from 'vue';
import MessageComponent from './components/MessageComponent.vue';

const title: string = "Vue app";
const LS: string = "jsFrameworkComparison-vue-messages";

let count: Ref<number> = ref(0);

setInterval(() => {
  count.value++;
  console.log('new value for count: ' + count.value);
}, 1000);

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
  <div class="App">
    <header class="header">
      <h1>{{ title }}</h1>
      <img src="./assets/logo.svg" class="logo" alt="Vue logo" />
      <span>{{ count }}</span>
    </header>
    <div class="content">
      <input type="text" @change="(event) => sendMessage(event)" />
      <MessageComponent v-for="elem in list" :message="elem" />
      <button @click="() => emptyList()">Empty</button>
    </div>
  </div>
</template>

<style scoped>
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
