countElement = document.getElementById('count');
MessageComponent = document.getElementById('MessageComponent');

const title = "Vanilla app";
const LS = "jsFrameworkComparison-vanilla-messages";

document.getElementById('title').innerHTML = title;

let count = 0;
countElement.innerHTML = count;
let interval = setInterval(() => {
    count++;
    countElement.innerHTML = count;
    console.log('new value for count: ' + count);
}, 1000);

let list = [];

list = JSON.parse(window.localStorage.getItem(LS) ?? "[]");

list.forEach(m => {
    renderMessage(m);
});

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

