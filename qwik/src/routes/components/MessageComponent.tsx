import { component$ } from '@builder.io/qwik';
import './MessageComponent.css';
import type { Message } from '..';

export default component$((props: {message: Message}) => {
    return <div class="elem">
        <span class="message">{props.message.message}</span>
        <span class="date">{props.message.date.toString()}</span>
    </div>;
});